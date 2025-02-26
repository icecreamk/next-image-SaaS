import { filetRoutes } from "./routes/file";
import { router } from './trpc'

export const appRouter = router({
    file: filetRoutes
})

export type AppRouter = typeof appRouter