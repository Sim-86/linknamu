import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

/** MONGODB_URI가 없으면 null을 반환 (로컬 개발 시 DB 없이도 페이지 동작) */
export function getMongoClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri)
      .connect()
      .catch((err) => {
        // 연결 실패를 캐시에 남기지 않아야 다음 요청에서 다시 시도함
        globalForMongo._mongoClientPromise = undefined;
        throw err;
      });
  }
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ _id: string; count: number }>("clicks");
}
