import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const NAME_REGEX = /^[\p{L}\p{M}'’\-.\s]+$/u;
const PHONE_REGEX = /^[+\d][\d\s\-().]{6,30}$/;
const URL_REGEX = /\b(https?:\/\/|www\.)\S+/gi;
const SUSPICIOUS_REGEX = /<\s*\/?\s*(script|iframe|object|embed|style)|on\w+\s*=|javascript:/i;
const CYRILLIC_REGEX = /[\u0400-\u04FF]/;

const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short")
    .max(80, "Name is too long")
    .regex(NAME_REGEX, "Name contains invalid characters"),
  email: z.string().trim().toLowerCase().email("Invalid email").max(254),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || PHONE_REGEX.test(v), "Invalid phone number"),
  projectType: z
    .string()
    .trim()
    .max(80)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message is too short")
    .max(4000, "Message is too long"),
  // Honeypot — must be empty
  website: z.string().max(0).optional().or(z.literal("")),
  // Timestamp the form was rendered (ms). Used for minimum fill time.
  renderedAt: z.number().int().positive().optional(),
});

const OWNER_EMAIL = "deepakwebstudio@gmail.com";
const MIN_FILL_MS = 2500;

// Block common disposable / throwaway providers
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "trashmail.com",
  "yopmail.com",
  "throwawaymail.com",
  "fakeinbox.com",
  "getnada.com",
  "sharklasers.com",
  "dispostable.com",
]);

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function looksLikeSpam(data: { name: string; message: string; email: string }) {
  const text = `${data.name}\n${data.message}`;

  if (SUSPICIOUS_REGEX.test(text)) return "Message contains disallowed content";

  const urls = data.message.match(URL_REGEX) ?? [];
  if (urls.length > 2) return "Too many links in message";

  // Long runs of repeated characters
  if (/(.)\1{9,}/.test(data.message)) return "Message looks like spam";

  // All caps shouting
  const letters = data.message.replace(/[^A-Za-z]/g, "");
  if (letters.length > 30 && letters === letters.toUpperCase()) {
    return "Please don't write in all caps";
  }

  // Cyrillic content is almost always spam on this English/Hindi site
  if (CYRILLIC_REGEX.test(text)) return "Message looks like spam";

  // Block obvious disposable email providers
  const domain = data.email.split("@")[1]?.toLowerCase() ?? "";
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return "Please use a permanent email address";
  }

  return null;
}

async function sendOwnerEmail(payload: z.infer<typeof ContactSchema>) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return { sent: false, reason: "RESEND_API_KEY not configured" };

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.5">
      <h2 style="margin:0 0 16px">New contact form submission</h2>
      <p><strong>Name:</strong> ${escape(payload.name)}</p>
      <p><strong>Email:</strong> ${escape(payload.email)}</p>
      ${payload.phone ? `<p><strong>Phone:</strong> ${escape(payload.phone)}</p>` : ""}
      ${payload.projectType ? `<p><strong>Project type:</strong> ${escape(payload.projectType)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;background:#f1f5f9;padding:12px;border-radius:8px">${escape(payload.message)}</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: "Deepak Web Studio <onboarding@resend.dev>",
      to: [OWNER_EMAIL],
      reply_to: payload.email,
      subject: `New inquiry from ${payload.name}`,
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Resend send failed:", res.status, text);
    return { sent: false, reason: `Email provider error (${res.status})` };
  }
  return { sent: true };
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return jsonResponse({ error: "Invalid JSON" }, 400);
        }

        const parsed = ContactSchema.safeParse(body);
        if (!parsed.success) {
          const first = parsed.error.issues[0]?.message ?? "Validation failed";
          return jsonResponse({ error: first }, 400);
        }
        const data = parsed.data;

        // Honeypot filled → silently accept (don't tell the bot)
        if (data.website && data.website.length > 0) {
          return jsonResponse({ success: true, emailSent: false });
        }

        // Too-fast submission → almost certainly a bot
        if (data.renderedAt) {
          const elapsed = Date.now() - data.renderedAt;
          if (elapsed < MIN_FILL_MS) {
            return jsonResponse({ success: true, emailSent: false });
          }
          // Or absurdly old form (> 6h) — likely replayed
          if (elapsed > 6 * 60 * 60 * 1000) {
            return jsonResponse({ error: "Form expired, please reload the page" }, 400);
          }
        }

        const spamReason = looksLikeSpam({
          name: data.name,
          message: data.message,
          email: data.email,
        });
        if (spamReason) {
          return jsonResponse({ error: spamReason }, 400);
        }

        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
          console.error("Contact endpoint missing env var: MONGODB_URI");
          return jsonResponse({ error: "Server not configured (missing MONGODB_URI)" }, 500);
        }

        try {
          const { getMongoDb } = await import("@/lib/mongo.server");
          const db = await getMongoDb("portfolio_db");
          await db.collection("contact_submissions").insertOne({
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            project_type: data.projectType || null,
            message: data.message,
            createdAt: new Date(),
            source: "contact_form",
          });
        } catch (mongoErr) {
          console.error("MongoDB insert failed:", mongoErr);
          return jsonResponse({ error: "Could not save submission" }, 500);
        }

        const emailResult = await sendOwnerEmail(data);

        return jsonResponse({ success: true, emailSent: emailResult.sent });
      },
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }),
    },
  },
});
