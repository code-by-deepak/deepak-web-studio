import { l as libExports } from "../_libs/mongodb.mjs";
import "timers/promises";
import "timers";
import "fs";
import "http";
import "process";
import "events";
import "dns";
import "url";
import "zlib";
import "net";
import "fs/promises";
import "tls";
import "child_process";
import "../_libs/bson.mjs";
import "stream";
import "util";
import "../_libs/react.mjs";
import "../_libs/mongodb-connection-string-url.mjs";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "../_libs/tr46.mjs";
import "../_libs/punycode.mjs";
import "../_libs/mongodb-js__saslprep.mjs";
import "../_libs/sparse-bitfield.mjs";
import "../_libs/memory-pager.mjs";
const globalForMongo = globalThis;
function getClientPromise() {
  if (!globalForMongo.__mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not configured");
    }
    const client = new libExports.MongoClient(uri, {
      // Reasonable defaults for Atlas
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 8e3
    });
    globalForMongo.__mongoClientPromise = client.connect();
  }
  return globalForMongo.__mongoClientPromise;
}
async function getMongoDb(dbName = "portfolio_db") {
  const client = await getClientPromise();
  return client.db(dbName);
}
export {
  getMongoDb
};
