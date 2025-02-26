import { getServerSession } from "@/server/auth";
import { initTRPC, TRPCError } from "@trpc/server";

export async function createTRPCContext() {
    const session = await getServerSession()
    return {
        session
    }
}

const t = initTRPC.context<typeof createTRPCContext>().create();
const { router, procedure } = t;



export const withLoggerProcedure = procedure.use(async ({ ctx, next }) => {
    const start = Date.now()
    const result = await next()
    console.log(`took ${Date.now() - start}ms`)
    return result
})


const withSessionMiddleware = t.middleware(async ({ ctx, next }) => {
    const session: any = getServerSession()

    return next({
        ctx: {
            session
        }
    })
})

export const protectedProcedure = withLoggerProcedure
    .use(withSessionMiddleware)
    .use(async ({ ctx, next }) => {
        if (!ctx.session?.user) {
            throw new TRPCError({
                code: 'FORBIDDEN'
            })
        }

        return next({
            ctx: {
                session: ctx.session!
            }
        })
    })


export {
    router
}