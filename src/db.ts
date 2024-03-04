import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: process.env.NODE_ENV === "production" ? "pretty" : "minimal",
});

export default prisma;
