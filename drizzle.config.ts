import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./server/db/schema.ts",
  dbCredentials: {
    url: "postgresql://postgres:123123@localhost:5432/postgres",
  },
});
