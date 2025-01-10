/* eslint-disable turbo/no-undeclared-env-vars */
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

const sql = createClient({
  url: process.env.MAIN_DB_URL as unknown as string,
  authToken: process.env.TURSO_GROUP_TOKEN,
});

export const db = drizzle({
  client: sql,
  schema,
  casing: "snake_case",
});
