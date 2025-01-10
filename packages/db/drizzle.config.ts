import type { Config } from "drizzle-kit";

if (!process.env.MAIN_DB_URL) {
  throw new Error("Missing MAIN_DB_URL");
}

export default {
  schema: "./src/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.MAIN_DB_URL,
    authToken: process.env.TURSO_GROUP_TOKEN,
  },
  casing: "snake_case",
} satisfies Config;
