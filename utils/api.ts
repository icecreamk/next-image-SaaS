import { httpBatchLink } from "@trpc/client";
import { TestRouter } from "./trpc";
import { createTRPCReact } from '@trpc/react-query'

export const trpcClientReact = createTRPCReact<TestRouter>({});

export const trpcClient = trpcClientReact.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
