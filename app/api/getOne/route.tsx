
import { NextResponse } from "next/server";
import { db, authenticate } from "@/lib/database";

export async function GET(request: Request) {
  // Grab the product ID from the URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await authenticate();
  const product = await db.collection("products").getOne(id!);

  return NextResponse.json({ product});
}
