// api/updateProduct/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db, authenticate } from "@/lib/database";


export async function GET(request: NextRequest) {
  try {
    await authenticate();

    const { searchParams } = new URL(request.url);

    // Extract the variables
    const id = searchParams.get("id");
    const brand = searchParams.get("brand");
    const model = searchParams.get("model");
    const description = searchParams.get("description");
    const price = searchParams.get("price");

    // check they exist
    if (!id || !brand || !model || !description || price === null || price.trim() === "") {
      return NextResponse.json(
        { error: "id, brand, model, description and price are required" },
        { status: 400 }
      );
    }

    // Update the existing product in PocketBase
    const product = await db.collection("products").update(id, {
      brand,
      model,
      description,
      price: price,
    });


    // send the OK back to the client with the created product
    return NextResponse.json(product, { status: 201 });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}
