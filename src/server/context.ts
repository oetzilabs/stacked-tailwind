import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createContext = async ({
  req,
}: trpcNext.CreateNextContextOptions): Promise<{ session: Session | null }> => {
  const session = await getSession({ req });
  return { session };
};
