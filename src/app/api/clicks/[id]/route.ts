import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

// POST /api/clicks/:id — 해당 링크의 클릭 수 +1
export async function POST(
  _req: Request,
  { params }: { params: { id: string } },
) {
  if (!links.some((l) => l.id === params.id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ ok: false, reason: "MONGODB_URI not set" });
  }

  await clicks.updateOne(
    { _id: params.id },
    { $inc: { count: 1 } },
    { upsert: true },
  );
  return NextResponse.json({ ok: true });
}
