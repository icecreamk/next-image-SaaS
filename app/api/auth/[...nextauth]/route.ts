import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GitLabProvider from "next-auth/providers/gitlab";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId:
        "Ov23liVf9qSgSQbMYF6K",
      clientSecret:
        "f2f1e5647b506454d27eedeb70667572a26bce10",
    }),
    GitLabProvider({
      clientId:
        "73a64f4d486caa3f2c6b10e1c119c595a1991fce586e3ac4cb1ff4d20461cdd1",
      clientSecret:
        "gloas-eb78e6fd26fc250da3145b7f3084343484fcfea2b392fc839ec3c85db81674a0",
    }),

  ],
});

export { handler as GET, handler as POST };
