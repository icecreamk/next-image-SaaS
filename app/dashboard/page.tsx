import { createTRPCContext, serverCaller } from "@/utils/trpc";

export default async function Home() {
  const context = await createTRPCContext();
  const data = await serverCaller(context).hello();
  return (
    <div>
      <h1 className="text-4xl font-bold">dashboard: {data}</h1>
    </div>
  );
}
