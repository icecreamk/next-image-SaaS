'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserInfo, SessionProvider } from "./UserInfo";
import { useEffect } from "react";
import { trpcClient } from "@/utils/api";
export default function Home() {
  useEffect(() => {
    trpcClient.hello.query();
  }, [])
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App name"></Input>
        <Textarea name="description" placeholder="Description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
      <SessionProvider>
        <UserInfo></UserInfo>
      </SessionProvider>
    </div>
  );
}
