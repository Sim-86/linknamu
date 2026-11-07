import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// GET /api/clicks — 링크별 클릭 수 조회 { [linkId]: count }
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) return NextResponse.json({});

  const docs = await clicks.find().toArray();
  return NextResponse.json(
    Object.fromEntries(docs.map((d) => [d._id, d.count])),
  );
}
