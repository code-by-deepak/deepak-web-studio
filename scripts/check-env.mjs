#!/usr/bin/env node
/**
 * Validates required environment variables before build/start.
 * Run via `node scripts/check-env.mjs` (wired into `prebuild`).
 * Exits 1 with a clear report if anything is missing.
 */

const REQUIRED = {
  client: [
    "VITE_SUPABASE_URL",
    "VITE_SUPABASE_PUBLISHABLE_KEY",
    "VITE_SUPABASE_PROJECT_ID",
  ],
  server: [
    "SUPABASE_URL",
    "SUPABASE_PUBLISHABLE_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
    "SUPABASE_JWKS",
    "LOVABLE_API_KEY",
    "MONGODB_URI",
    "RESEND_API_KEY",
    "ADMIN_PASSCODE",
  ],
};

const OPTIONAL = ["SUPABASE_DB_URL", "SUPABASE_ANON_KEY"];

const URL_VARS = ["VITE_SUPABASE_URL", "SUPABASE_URL"];

const missing = [];
const invalid = [];

for (const group of Object.values(REQUIRED)) {
  for (const name of group) {
    const v = process.env[name];
    if (!v || v.trim() === "") {
      missing.push(name);
      continue;
    }
    if (URL_VARS.includes(name) && !/^https?:\/\//.test(v)) {
      invalid.push(`${name} must start with http(s)://`);
    }
  }
}

const present = [...REQUIRED.client, ...REQUIRED.server, ...OPTIONAL].filter(
  (n) => process.env[n] && process.env[n].trim() !== "",
);

console.log("\nEnvironment check");
console.log("─────────────────");
console.log(`Found ${present.length} configured variable(s).`);

if (missing.length || invalid.length) {
  if (missing.length) {
    console.error("\nMissing required variables:");
    for (const n of missing) console.error(`  - ${n}`);
  }
  if (invalid.length) {
    console.error("\nInvalid values:");
    for (const m of invalid) console.error(`  - ${m}`);
  }
  console.error(
    "\nSet these in Vercel: Project → Settings → Environment Variables.",
  );
  console.error("See DEPLOYMENT.md for the full checklist.\n");
  process.exit(1);
}

console.log("All required environment variables are set.\n");
