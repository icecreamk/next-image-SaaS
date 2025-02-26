import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { TestRouter } from "./trpc";
import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '@/server/router'

export const trpcClientReact = createTRPCReact<AppRouter>({});

export const trpcClient = trpcClientReact.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});


export const trcpPureClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
})