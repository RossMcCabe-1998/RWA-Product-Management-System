// app/api/homeText/route.ts
import { NextResponse } from "next/server";
import { getRedisClient } from "@/lib/redis";

export async function GET() {
  try {
    const redis = await getRedisClient();

    // Try grab the text from Redis
    let title = await redis.get("home_title");
    let description = await redis.get("home_description");
    let welcomeHeading = await redis.get("home_welcome_heading");
    let welcomeBody = await redis.get("home_welcome_body");

    // If Redis is empty, save text into Redis
    if (!title || !description || !welcomeHeading || !welcomeBody) {
      title = "Product Management System";
      description = "Manage your products efficiently";
      welcomeHeading = "Welcome to the Home page!";
      welcomeBody ="Welcome to the app. Use the navigation menu to browse all available products, view individual product details, add new stock, or update existing product records.";

      await redis.set("home_title", title);
      await redis.set("home_description", description);
      await redis.set("home_welcome_heading", welcomeHeading);
      await redis.set("home_welcome_body", welcomeBody);
    }

    // Sends all strings in json back to the homepage
    return NextResponse.json({
      title,
      description,
      welcomeHeading,
      welcomeBody,
    });

  } catch (error) {
    console.error("Redis error:", error);
    return NextResponse.json(
      { error: "Failed to load homepage text from Redis" },
      { status: 500 }
    );
  }
}
