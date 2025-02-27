import { router } from './trpc';
import { filetRoutes } from "./routes/file";

export const appRouter = router({
    file: filetRoutes
})

export type AppRouter = typeof appRouter