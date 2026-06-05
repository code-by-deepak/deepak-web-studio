import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  passcode: z.string().min(1),
  search: z.string().trim().max(200).optional().default(""),
  field: z.enum(["all", "name", "email", "phone", "project_type"]).optional().default("all"),
});

export type Submission = {
  id: string;
  source: "supabase" | "mongodb";
  name: string;
  email: string;
  phone: string | null;
  project_type: string | null;
  message: string;
  created_at: string;
};

export const getSubmissions = createServerFn({ method: "POST" })
  .inputValidator((input) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const expected = process.env.ADMIN_PASSCODE;
    if (!expected) {
      throw new Error("ADMIN_PASSCODE not configured on the server");
    }
    if (data.passcode !== expected) {
      throw new Error("Invalid passcode");
    }

    const results: Submission[] = [];
    const errors: string[] = [];

    // Supabase
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: rows, error } = await supabaseAdmin
        .from("contact_submissions")
        .select("id, name, email, phone, project_type, message, created_at")
        .order("created_at", { ascending: false })
        .limit(500);
      if (error) throw error;
      for (const r of rows ?? []) {
        results.push({
          id: String(r.id),
          source: "supabase",
          name: r.name,
          email: r.email,
          phone: r.phone ?? null,
          project_type: r.project_type ?? null,
          message: r.message,
          created_at: r.created_at,
        });
      }
    } catch (e) {
      console.error("Supabase fetch failed:", e);
      errors.push(`Supabase: ${e instanceof Error ? e.message : "unknown error"}`);
    }

    // MongoDB
    try {
      const { getMongoDb } = await import("@/lib/mongo.server");
      const db = await getMongoDb("portfolio_db");
      const docs = await db
        .collection("dev_portfolio")
        .find({})
        .sort({ createdAt: -1 })
        .limit(500)
        .toArray();
      for (const d of docs) {
        results.push({
          id: String(d._id),
          source: "mongodb",
          name: String(d.name ?? ""),
          email: String(d.email ?? ""),
          phone: d.phone ? String(d.phone) : null,
          project_type: d.project_type ? String(d.project_type) : null,
          message: String(d.message ?? ""),
          created_at:
            d.createdAt instanceof Date
              ? d.createdAt.toISOString()
              : String(d.createdAt ?? new Date().toISOString()),
        });
      }
    } catch (e) {
      console.error("Mongo fetch failed:", e);
      errors.push(`MongoDB: ${e instanceof Error ? e.message : "unknown error"}`);
    }

    // Filter
    const q = data.search.trim().toLowerCase();
    const filtered = q
      ? results.filter((r) => {
          const fields =
            data.field === "all"
              ? [r.name, r.email, r.phone ?? "", r.project_type ?? ""]
              : [
                  data.field === "name"
                    ? r.name
                    : data.field === "email"
                      ? r.email
                      : data.field === "phone"
                        ? (r.phone ?? "")
                        : (r.project_type ?? ""),
                ];
          return fields.some((f) => f.toLowerCase().includes(q));
        })
      : results;

    filtered.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));

    return { submissions: filtered, errors };
  });
