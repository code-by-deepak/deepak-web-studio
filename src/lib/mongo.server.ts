import { MongoClient, type Db } from "mongodb";

// Cache the client across invocations (important on serverless/edge runtimes
// so we don't open a new pool on every request).
const globalForMongo = globalThis as unknown as {
  __mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> {
  if (!globalForMongo.__mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not configured");
    }
    const client = new MongoClient(uri, {
      // Reasonable defaults for Atlas
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 8000,
    });
    globalForMongo.__mongoClientPromise = client.connect();
  }
  return globalForMongo.__mongoClientPromise;
}

export async function getMongoDb(dbName = "portfolio_db"): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}
