import { PrismaClient } from "@prisma/client"
//q: what is this file for ?  
//a: this file is for connecting to the database
//q: why is it in a libs folder ?
//a: it is in a libs folder because it is a library that is used in the app

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
