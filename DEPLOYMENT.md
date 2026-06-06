# Vercel Deployment Checklist

Pre-flight checks for deploying this TanStack Start app to Vercel.

## 1. Environment variables

Add every variable below in **Vercel → Project → Settings → Environment Variables** for **Production**, **Preview**, and **Development**. Mark server-only secrets as **Sensitive**.

### Client-visible (safe in browser bundles)
| Name | Source |
| --- | --- |
| `VITE_SUPABASE_URL` | Lovable Cloud → Settings |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Lovable Cloud → Settings |
| `VITE_SUPABASE_PROJECT_ID` | Lovable Cloud → Settings |

### Server-only (never expose to client)
| Name | Source |
| --- | --- |
| `SUPABASE_URL` | Same as `VITE_SUPABASE_URL` |
| `SUPABASE_PUBLISHABLE_KEY` | Same as `VITE_SUPABASE_PUBLISHABLE_KEY` |
| `SUPABASE_SERVICE_ROLE_KEY` | Cloud → Secrets (eye icon) |
| `SUPABASE_JWKS` | Cloud → Secrets |
| `LOVABLE_API_KEY` | Cloud → Secrets |
| `MONGODB_URI` | Cloud → Secrets |
| `RESEND_API_KEY` | Cloud → Secrets |
| `ADMIN_PASSCODE` | Cloud → Secrets |

### Optional
- `SUPABASE_DB_URL` — only for direct Postgres connections
- `SUPABASE_ANON_KEY` — legacy alias, not required

## 2. Automated validation

`scripts/check-env.mjs` runs automatically before every build (`prebuild` hook). It fails the build with a readable report if any required variable is missing or malformed.

Run it locally any time:
```bash
node scripts/check-env.mjs
```

## 3. Build settings

In Vercel → Project → Settings → Build & Development:
- **Framework Preset:** Other (Vite handles SSR via the TanStack Start plugin)
- **Build Command:** `bun run build` (or `npm run build`)
- **Output Directory:** leave default (`.output` / framework-detected)
- **Install Command:** `bun install` (or `npm install`)
- **Node.js Version:** 20.x or later

## 4. Post-deploy verification

After the first successful deploy:

- [ ] Visit `/` — homepage renders
- [ ] Visit a deep link directly (no 404 on refresh)
- [ ] Submit the contact form — row appears in Supabase AND Mongo
- [ ] Sign in flow works end-to-end
- [ ] Admin page (`/admin`) unlocks with `ADMIN_PASSCODE` and lists submissions
- [ ] Browser DevTools → Network: no `SUPABASE_SERVICE_ROLE_KEY` or other server secret appears in any client bundle or response
- [ ] Vercel → Logs: no `Missing env`, `Unauthorized`, or `[unenv] X is not implemented` errors

## 5. Common pitfalls

- **404 on refresh of a deep link** → confirm Vercel detected the TanStack Start SSR adapter; do not add a SPA fallback.
- **`Unauthorized: No authorization header provided`** → `attachSupabaseAuth` missing from `src/start.ts` `functionMiddleware`.
- **Server fn returns 500 with `process.env.X undefined`** → env var not set for the current Vercel environment (Production vs Preview).
- **Webhook fails with 401** → make sure the webhook secret in the third-party dashboard matches the Vercel env var exactly.
