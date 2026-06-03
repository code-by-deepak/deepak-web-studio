import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Force Nitro on with the Vercel preset so `vite build` produces a
  // Vercel Build Output API bundle in `.vercel/output/`.
  nitro: {
    preset: "vercel",
  },
});
