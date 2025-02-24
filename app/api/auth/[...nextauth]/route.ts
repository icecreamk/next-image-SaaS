import NextAuth from "next-auth";
import GitLabProvider from "next-auth/providers/gitlab";

const handler = NextAuth({
  providers: [
    GitLabProvider({
      clientId:
        "73a64f4d486caa3f2c6b10e1c119c595a1991fce586e3ac4cb1ff4d20461cdd1",
      clientSecret:
        "gloas-1f997132775b1d5aff38b89a0ac54410ae53bd46e48be9589f92cb355d91bd6a",
    }),
  ],
});

export { handler as GET, handler as POST };
