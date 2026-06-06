import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { o as objectType, n as numberType, s as stringType, l as literalType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BKAOyk40.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0b0b14" },
      { title: "Deepak Singh | Web Developer & Designer" },
      { name: "description", content: "Freelance web developer helping businesses grow with modern beautiful websites." },
      { name: "author", content: "Deepak Singh" },
      { property: "og:title", content: "Deepak Singh | Web Developer & Designer" },
      { property: "og:description", content: "Freelance web developer helping businesses grow with modern beautiful websites." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://deepak-web-studio.lovable.app" },
      { property: "og:site_name", content: "Deepak Web Studio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Deepak Singh | Web Developer & Designer" },
      { name: "twitter:description", content: "Freelance web developer helping businesses grow with modern beautiful websites." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./admin-L770reLy.mjs");
const Route$2 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin"
    }, {
      name: "robots",
      content: "noindex, nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BfENTBNY.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Deepak Web Studio — Freelance Web Developer for Businesses"
    }, {
      name: "description",
      content: "Deepak Singh builds fast, beautiful websites, e-commerce stores and high-converting landing pages for small businesses and startups."
    }, {
      property: "og:title",
      content: "Deepak Web Studio — Freelance Web Developer"
    }, {
      property: "og:description",
      content: "Helping small businesses & startups get a powerful online presence."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const NAME_REGEX = /^[\p{L}\p{M}'’\-.\s]+$/u;
const PHONE_REGEX = /^[+\d][\d\s\-().]{6,30}$/;
const URL_REGEX = /\b(https?:\/\/|www\.)\S+/gi;
const SUSPICIOUS_REGEX = /<\s*\/?\s*(script|iframe|object|embed|style)|on\w+\s*=|javascript:/i;
const CYRILLIC_REGEX = /[\u0400-\u04FF]/;
const ContactSchema = objectType({
  name: stringType().trim().min(2, "Name is too short").max(80, "Name is too long").regex(NAME_REGEX, "Name contains invalid characters"),
  email: stringType().trim().toLowerCase().email("Invalid email").max(254),
  phone: stringType().trim().max(40).optional().or(literalType("")).refine((v) => !v || PHONE_REGEX.test(v), "Invalid phone number"),
  projectType: stringType().trim().max(80).optional().or(literalType("")),
  message: stringType().trim().min(10, "Message is too short").max(4e3, "Message is too long"),
  // Honeypot — must be empty
  website: stringType().max(0).optional().or(literalType("")),
  // Timestamp the form was rendered (ms). Used for minimum fill time.
  renderedAt: numberType().int().positive().optional()
});
const OWNER_EMAIL = "deepakwebstudio@gmail.com";
const MIN_FILL_MS = 2500;
const DISPOSABLE_DOMAINS = /* @__PURE__ */ new Set([
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
  "dispostable.com"
]);
function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
function looksLikeSpam(data) {
  const text = `${data.name}
${data.message}`;
  if (SUSPICIOUS_REGEX.test(text)) return "Message contains disallowed content";
  const urls = data.message.match(URL_REGEX) ?? [];
  if (urls.length > 2) return "Too many links in message";
  if (/(.)\1{9,}/.test(data.message)) return "Message looks like spam";
  const letters = data.message.replace(/[^A-Za-z]/g, "");
  if (letters.length > 30 && letters === letters.toUpperCase()) {
    return "Please don't write in all caps";
  }
  if (CYRILLIC_REGEX.test(text)) return "Message looks like spam";
  const domain = data.email.split("@")[1]?.toLowerCase() ?? "";
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return "Please use a permanent email address";
  }
  return null;
}
async function sendOwnerEmail(payload) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return { sent: false, reason: "RESEND_API_KEY not configured" };
  const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
      Authorization: `Bearer ${resendKey}`
    },
    body: JSON.stringify({
      from: "Deepak Web Studio <onboarding@resend.dev>",
      to: [OWNER_EMAIL],
      reply_to: payload.email,
      subject: `New inquiry from ${payload.name}`,
      html
    })
  });
  if (!res.ok) {
    const text = await res.text();
    console.error("Resend send failed:", res.status, text);
    return { sent: false, reason: `Email provider error (${res.status})` };
  }
  return { sent: true };
}
const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body;
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
        if (data.website && data.website.length > 0) {
          return jsonResponse({ success: true, emailSent: false });
        }
        if (data.renderedAt) {
          const elapsed = Date.now() - data.renderedAt;
          if (elapsed < MIN_FILL_MS) {
            return jsonResponse({ success: true, emailSent: false });
          }
          if (elapsed > 6 * 60 * 60 * 1e3) {
            return jsonResponse({ error: "Form expired, please reload the page" }, 400);
          }
        }
        const spamReason = looksLikeSpam({
          name: data.name,
          message: data.message,
          email: data.email
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
          const { getMongoDb } = await import("./mongo.server-BjxNFQky.mjs");
          const db = await getMongoDb("portfolio_db");
          await db.collection("contact_submissions").insertOne({
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            project_type: data.projectType || null,
            message: data.message,
            createdAt: /* @__PURE__ */ new Date(),
            source: "contact_form"
          });
        } catch (mongoErr) {
          console.error("MongoDB insert failed:", mongoErr);
          return jsonResponse({ error: "Could not save submission" }, 500);
        }
        const emailResult = await sendOwnerEmail(data);
        return jsonResponse({ success: true, emailSent: emailResult.sent });
      },
      OPTIONS: async () => new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      })
    }
  }
});
const AdminRoute = Route$2.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$3
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const ApiPublicContactRoute = Route.update({
  id: "/api/public/contact",
  path: "/api/public/contact",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  ApiPublicContactRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
