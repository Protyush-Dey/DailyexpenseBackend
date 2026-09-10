import dotenv from "dotenv";

dotenv.config();

interface Config {
  mongoUrl: string;
  mongoPort: number;
}

export const config: Config = {
  mongoUrl: process.env.MONGO_URL || "",
  mongoPort: Number(process.env.MONGO_PORT) || 3000,
};

console.log(
  "==> MONGO_URL:",
  config.mongoUrl ? "Found " : "Missing "
);

console.log("==> DB_NAME:", config.dbName);