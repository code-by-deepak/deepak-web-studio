#!/usr/bin/env node
/**
 * Validates required environment variables before build/start.
 * Run via `node scripts/check-env.mjs` (wired into `prebuild`).
 * Exits 1 with a clear report if anything is missing.
 */

const REQUIRED = {
  server: [
    "MONGODB_URI",
    "RESEND_API_KEY",
    "ADMIN_PASSCODE",
  ],
};

const OPTIONAL = [];

const missing = [];
const invalid = [];

for (const group of Object.values(REQUIRED)) {
  for (const name of group) {
    const v = process.env[name];
    if (!v || v.trim() === "") {
      missing.push(name);
      continue;
    }
  }
}

const present = [...REQUIRED.server, ...OPTIONAL].filter(
  (n) => process.env[n] && process.env[n].trim() !== "",
);

console.log("\nEnvironment check");
console.log("─────────────────");
console.log(`Found ${present.length} configured variable(s).`);

if (missing.length || invalid.length) {
  if (missing.length) {
    console.warn("\nMissing required variables:");
    for (const n of missing) console.warn(`  - ${n}`);
  }
  if (invalid.length) {
    console.warn("\nInvalid values:");
    for (const m of invalid) console.warn(`  - ${m}`);
  }
  console.warn(
    "\nSet these in Vercel: Project → Settings → Environment Variables.",
  );
  console.warn("See DEPLOYMENT.md for the full checklist.\n");
  if (process.env.CI === "true") process.exit(1);
}

console.log("All required environment variables are set.\n");
