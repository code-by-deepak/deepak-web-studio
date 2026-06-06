import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-CZ2SoOxG.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, e as enumType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
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
const getSubmissions_createServerFn_handler = createServerRpc({
  id: "f4b502376c2aad1714da6efc58f06e92e5a7d10491fcad1eb6ff917c0139435c",
  name: "getSubmissions",
  filename: "src/lib/admin.functions.ts"
}, (opts) => getSubmissions.__executeServer(opts));
const getSubmissions = createServerFn({
  method: "POST"
}).inputValidator((input) => InputSchema.parse(input)).handler(getSubmissions_createServerFn_handler, async ({
  data
}) => {
  const expected = process.env.ADMIN_PASSCODE;
  if (!expected) {
    throw new Error("ADMIN_PASSCODE not configured on the server");
  }
  if (data.passcode !== expected) {
    throw new Error("Invalid passcode");
  }
  const results = [];
  const errors = [];
  try {
    const {
      getMongoDb
    } = await import("./mongo.server-BjxNFQky.mjs");
    const db = await getMongoDb("portfolio_db");
    const docs = await db.collection("contact_submissions").find({}).sort({
      createdAt: -1
    }).limit(500).toArray();
    for (const d of docs) {
      results.push({
        id: String(d._id),
        source: "mongodb",
        name: String(d.name ?? ""),
        email: String(d.email ?? ""),
        phone: d.phone ? String(d.phone) : null,
        project_type: d.project_type ? String(d.project_type) : null,
        message: String(d.message ?? ""),
        created_at: d.createdAt instanceof Date ? d.createdAt.toISOString() : String(d.createdAt ?? (/* @__PURE__ */ new Date()).toISOString())
      });
    }
  } catch (e) {
    console.error("Mongo fetch failed:", e);
    errors.push(`MongoDB: ${e instanceof Error ? e.message : "unknown error"}`);
  }
  const q = data.search.trim().toLowerCase();
  const filtered = q ? results.filter((r) => {
    const fields = data.field === "all" ? [r.name, r.email, r.phone ?? "", r.project_type ?? ""] : [data.field === "name" ? r.name : data.field === "email" ? r.email : data.field === "phone" ? r.phone ?? "" : r.project_type ?? ""];
    return fields.some((f) => f.toLowerCase().includes(q));
  }) : results;
  filtered.sort((a, b) => a.created_at < b.created_at ? 1 : -1);
  return {
    submissions: filtered,
    errors
  };
});
export {
  getSubmissions_createServerFn_handler
};
