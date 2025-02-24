"use client";

import {
  useSession,
  SessionProvider as NextAuthProvider,
} from "next-auth/react";

export function UserInfo() {
  const session = useSession();
  return (
    <div>
      <h1>{session.data?.user?.name}</h1>
    </div>
  );
}

export function SessionProvider(props: any) {
  return <NextAuthProvider {...props}></NextAuthProvider>;
}
