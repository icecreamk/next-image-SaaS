import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { TestRouter } from "./trpc";

export const trpcClient = createTRPCProxyClient<TestRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
