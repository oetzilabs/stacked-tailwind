import { ZodError } from "zod";
import { createRouter } from "../createRouter";
import { mergeRoutes } from "./merge";

export const baseRouter = createRouter().formatError(({ shape, error }) => {
  return {
    ...shape,
    data: {
      ...shape.data,
      zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
    },
  };
});

export type RootRouter = typeof baseRouter;

export const appRouter = () => mergeRoutes<RootRouter>(baseRouter);

export type AppRouter = ReturnType<typeof appRouter>;
