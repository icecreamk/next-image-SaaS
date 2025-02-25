import { getServerSession } from "@/server/server/auth";
import { initTRPC, TRPCError } from "@trpc/server";
import { createCallerFactory } from "@trpc/server/unstable-core-do-not-import";

export async function createTRPCContext() {
  const session = await getServerSession()
  if (!session?.user) {
    throw new TRPCError({ code: "FORBIDDEN" });
  }
  return {
    session
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create();
const { router, procedure } = t;

const middleware = t.middleware(async ({ ctx, next }) => {
  const start = Date.now()
  const result = await next()
  console.log(`took ${Date.now() - start}ms`)
  return result
})


// const checkLoginMiddleware = t.middleware(async ({ ctx, next }) => {
//   if (!ctx.session?.user) {
//     throw new TRPCError({ code: "FORBIDDEN" });
//   }
//   return next()
// })

const loggedProcedure = procedure.use(middleware)
// const protectedProcedure = procedure.use(checkLoginMiddleware)


export const testRouter = router({
  hello: loggedProcedure.query(async ({ ctx }) => {
    await new Promise((resolve) => setTimeout(() => {
      resolve(null)
    }, 1000));
    console.log('111', ctx.session)
    return "Hello World";
  }),
});

export type TestRouter = typeof testRouter;

export const serverCaller = createCallerFactory()(testRouter);