import { PrismaClient } from "@prisma/client";

declare global {
    var prisma:PrismaClient | undefined
}

// each time when we changed the code ,it creates new DB instance, but we dont need it for loocals
export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = db