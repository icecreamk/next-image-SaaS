import { initTRPC } from "@trpc/server";

const t = initTRPC.create();
const { router, procedure } = t;

export const testRouter = router({
  hello: procedure.query(() => {
    return "Hello World";
  }),
});

export type TestRouter = typeof testRouter;
