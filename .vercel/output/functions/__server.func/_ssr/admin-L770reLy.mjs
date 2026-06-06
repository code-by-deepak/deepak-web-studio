import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CZ2SoOxG.mjs";
import "../_libs/seroval.mjs";
import { o as objectType, e as enumType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const InputSchema = objectType({
  passcode: stringType().min(1),
  search: stringType().trim().max(200).optional().default(""),
  field: enumType(["all", "name", "email", "phone", "project_type"]).optional().default("all")
});
const getSubmissions = createServerFn({
  method: "POST"
}).inputValidator((input) => InputSchema.parse(input)).handler(createSsrRpc("f4b502376c2aad1714da6efc58f06e92e5a7d10491fcad1eb6ff917c0139435c"));
function AdminPage() {
  const callGetSubmissions = useServerFn(getSubmissions);
  const [passcode, setPasscode] = reactExports.useState("");
  const [unlocked, setUnlocked] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [errors, setErrors] = reactExports.useState([]);
  const [rows, setRows] = reactExports.useState([]);
  const [search, setSearch] = reactExports.useState("");
  const [field, setField] = reactExports.useState("all");
  const fetchData = async (overrides) => {
    setLoading(true);
    setError(null);
    try {
      const res = await callGetSubmissions({
        data: {
          passcode,
          search: overrides?.search ?? search,
          field: overrides?.field ?? field
        }
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
  const onUnlock = (e) => {
    e.preventDefault();
    void fetchData();
  };
  if (!unlocked) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen grid place-items-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: onUnlock, className: "glass rounded-2xl p-8 w-full max-w-sm space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Admin access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enter the admin passcode to continue." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: passcode, onChange: (e) => setPasscode(e.target.value), autoFocus: true, className: "w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none", placeholder: "Passcode" }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading || !passcode, className: "w-full px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground disabled:opacity-50", children: loading ? "Checking..." : "Unlock" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-end justify-between gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Contact submissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Showing ",
          rows.length,
          " entries from MongoDB"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => void fetchData(), disabled: loading, className: "px-4 py-2 rounded-xl border border-border hover:border-accent/40 text-sm", children: loading ? "Refreshing..." : "Refresh" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: field, onChange: (e) => setField(e.target.value), className: "bg-background/40 border border-border rounded-xl px-3 py-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All fields" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "phone", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "project_type", children: "Project type" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), onKeyDown: (e) => {
        if (e.key === "Enter") void fetchData();
      }, placeholder: "Search...", className: "flex-1 min-w-[200px] bg-background/40 border border-border rounded-xl px-4 py-2 text-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => void fetchData(), className: "px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium", children: "Search" }),
      search && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setSearch("");
        void fetchData({
          search: ""
        });
      }, className: "px-4 py-2 rounded-xl border border-border text-sm", children: "Clear" })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive mb-3", children: error }),
    errors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-sm text-amber-500 space-y-1", children: errors.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "⚠ ",
      m
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-background/40 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Source" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3", children: "Received" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        rows.length === 0 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "text-center py-10 text-muted-foreground", children: "No submissions found." }) }),
        rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/50 align-top", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-sky-500/15 text-sky-400", children: r.source }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${r.email}`, className: "hover:text-accent", children: r.email }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: r.phone ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${r.phone}`, className: "hover:text-accent", children: r.phone }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: r.project_type ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-3 whitespace-pre-wrap", children: r.message }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground whitespace-nowrap", children: new Date(r.created_at).toLocaleString() })
        ] }, `${r.source}-${r.id}`))
      ] })
    ] }) }) })
  ] }) });
}
export {
  AdminPage as component
};
