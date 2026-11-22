// api/addProduct/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db, authenticate } from "@/lib/database";


export async function GET(request: NextRequest) {
  try {
    await authenticate();

    const { searchParams } = new URL(request.url);

     // Extract the variables
    const brand = searchParams.get("brand");
    const model = searchParams.get("model");
    const description = searchParams.get("description");
    const price = searchParams.get("price");

    // check they exist
    if (!brand || !model || !description || price === null || price.trim() === "") {
      return NextResponse.json(
        { error: "brand, model, description and price are required" },
        { status: 400 }
      );
    }

    // Create a new product in PocketBase
    const product = await db.collection("products").create({
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
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
