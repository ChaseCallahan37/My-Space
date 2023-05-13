import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

//I have ran into issues with O-Auth when
//using turbo as my buildpack
//IDK why or if it is still an issue

export const authOptions: NextAuthOptions = {
  //Add this top field to persist user sessions
  //Will need to install the package @next-auth/prisma-adapter (atm)
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
