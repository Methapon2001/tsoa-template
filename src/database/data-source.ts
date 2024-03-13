import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const database = new DataSource({
  type: "mysql",
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT || 3306),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: process.env.NODE_ENV !== "production",
  logging: process.env.NODE_ENV !== "production",
  entities: [
    process.env.NODE_ENV !== "production" ? "src/entities/**/*.ts" : "dist/entities/**/*.js",
  ],
  migrations: [
    process.env.NODE_ENV !== "production"
      ? "src/database/migrations/**/*.ts"
      : "dist/database/migrations/**/*.js",
  ],
  subscribers: [],
});

export default database;
