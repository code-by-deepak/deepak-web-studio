import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  projectType: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
});

const OWNER_EMAIL = "deepakwebstudio@gmail.com";

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
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
          return jsonResponse(
            { error: "Validation failed", details: parsed.error.flatten() },
            400,
          );
        }
        const data = parsed.data;

        const supabaseUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseUrl || !serviceKey) {
          return jsonResponse({ error: "Server not configured" }, 500);
        }

        const supabase = createClient(supabaseUrl, serviceKey, {
          auth: { autoRefreshToken: false, persistSession: false },
        });

        const { error: insertError } = await supabase
          .from("contact_submissions")
          .insert({
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            project_type: data.projectType || null,
            message: data.message,
          });

        if (insertError) {
          console.error("Insert error:", insertError);
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
