// api/deleteProduct/route.ts
import { NextResponse } from "next/server";
import { db, authenticate } from "@/lib/database";


export async function DELETE(request: Request) {
  // Grab the product ID from the URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await authenticate();
  await db.collection("products").delete(id!);

  return NextResponse.json({ message: "Deleted" });
}
