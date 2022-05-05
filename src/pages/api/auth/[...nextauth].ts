import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/prisma";

export default NextAuth({
  providers: [],
  adapter: PrismaAdapter(prisma),
});
