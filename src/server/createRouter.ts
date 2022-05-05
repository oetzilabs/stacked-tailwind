import { Context } from "./context";
import * as trpc from "@trpc/server";
import superjson from "superjson";

export const createRouter = () => trpc.router<Context>().transformer(superjson);
