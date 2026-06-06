import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { getSubmissions, type Submission } from "@/lib/admin.functions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type Field = "all" | "name" | "email" | "phone" | "project_type";

function AdminPage() {
  const callGetSubmissions = useServerFn(getSubmissions);
  const [passcode, setPasscode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [rows, setRows] = useState<Submission[]>([]);
  const [search, setSearch] = useState("");
  const [field, setField] = useState<Field>("all");

  const fetchData = async (overrides?: { search?: string; field?: Field }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await callGetSubmissions({
        data: {
          passcode,
          search: overrides?.search ?? search,
          field: overrides?.field ?? field,
        },
      });
      setRows(res.submissions);
      setErrors(res.errors);
      setUnlocked(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
      if (!unlocked) setRows([]);
    } finally {
      setLoading(false);
    }
  };

  const onUnlock = (e: FormEvent) => {
    e.preventDefault();
    void fetchData();
  };

  if (!unlocked) {
    return (
      <main className="min-h-screen grid place-items-center px-6">
        <form onSubmit={onUnlock} className="glass rounded-2xl p-8 w-full max-w-sm space-y-4">
          <h1 className="text-xl font-bold">Admin access</h1>
          <p className="text-sm text-muted-foreground">Enter the admin passcode to continue.</p>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            autoFocus
            className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none"
            placeholder="Passcode"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={loading || !passcode}
            className="w-full px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Checking..." : "Unlock"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Contact submissions</h1>
            <p className="text-sm text-muted-foreground">
              Showing {rows.length} entries from MongoDB
            </p>
          </div>
          <button
            onClick={() => void fetchData()}
            disabled={loading}
            className="px-4 py-2 rounded-xl border border-border hover:border-accent/40 text-sm"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </header>

        <div className="flex flex-wrap gap-3 mb-4">
          <select
            value={field}
            onChange={(e) => setField(e.target.value as Field)}
            className="bg-background/40 border border-border rounded-xl px-3 py-2 text-sm"
          >
            <option value="all">All fields</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="project_type">Project type</option>
          </select>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") void fetchData();
            }}
            placeholder="Search..."
            className="flex-1 min-w-[200px] bg-background/40 border border-border rounded-xl px-4 py-2 text-sm"
          />
          <button
            onClick={() => void fetchData()}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium"
          >
            Search
          </button>
          {search && (
            <button
              onClick={() => {
                setSearch("");
                void fetchData({ search: "" });
              }}
              className="px-4 py-2 rounded-xl border border-border text-sm"
            >
              Clear
            </button>
          )}
        </div>

        {error && <p className="text-sm text-destructive mb-3">{error}</p>}
        {errors.length > 0 && (
          <div className="mb-3 text-sm text-amber-500 space-y-1">
            {errors.map((m, i) => (
              <p key={i}>⚠ {m}</p>
            ))}
          </div>
        )}

        <div className="glass rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-background/40 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left px-4 py-3">Source</th>
                  <th className="text-left px-4 py-3">Name</th>
                  <th className="text-left px-4 py-3">Email</th>
                  <th className="text-left px-4 py-3">Phone</th>
                  <th className="text-left px-4 py-3">Project</th>
                  <th className="text-left px-4 py-3">Message</th>
                  <th className="text-left px-4 py-3">Received</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && !loading && (
                  <tr>
                    <td colSpan={7} className="text-center py-10 text-muted-foreground">
                      No submissions found.
                    </td>
                  </tr>
                )}
                {rows.map((r) => (
                  <tr key={`${r.source}-${r.id}`} className="border-t border-border/50 align-top">
                    <td className="px-4 py-3">
                      <span
                        className="text-xs px-2 py-1 rounded-full bg-sky-500/15 text-sky-400"
                      >
                        {r.source}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium">{r.name}</td>
                    <td className="px-4 py-3">
                      <a href={`mailto:${r.email}`} className="hover:text-accent">
                        {r.email}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      {r.phone ? (
                        <a href={`tel:${r.phone}`} className="hover:text-accent">
                          {r.phone}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">{r.project_type ?? "—"}</td>
                    <td className="px-4 py-3 max-w-sm">
                      <p className="line-clamp-3 whitespace-pre-wrap">{r.message}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(r.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
