import "server-only";
import { createClient } from "redis";

// Create a Redis connection object using the url from .env.local file
const client = createClient({url: process.env.REDIS_URL!,});

client.on("error", (error) => console.error("Redis Client Error", error));

async function getRedisClient() {
  // Check if the Redis client is connected
  if (!client.isOpen) {
    await client.connect();
  }
  return client;
}

export { getRedisClient };