import { AnyRouter } from "@trpc/server";
import { RootRouter } from "./_app";

// Please merge your routes here!
export const mergeRoutes = <T extends RootRouter>(router: T) =>
  router
    .query("hellomessage", {
      resolve() {
        return "simple and easy to set up!";
      },
    })
    .query("aboutmessage", {
      resolve() {
        return "fast as well!";
      },
    });
