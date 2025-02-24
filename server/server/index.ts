import { AuthOptions } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GitHubProvider from "next-auth/providers/github";
import GitLabProvider from "next-auth/providers/gitlab";
import { db } from "@/server/db/db";

export const authOptions: AuthOptions = {
    adapter: DrizzleAdapter(db),
    providers: [
        GitHubProvider({
            clientId:
                "Ov23liVf9qSgSQbMYF6K",
            clientSecret:
                "b1cecbe2805d09a0f510adf826f2426d55100e1b",
        }),
        GitLabProvider({
            clientId:
                "73a64f4d486caa3f2c6b10e1c119c595a1991fce586e3ac4cb1ff4d20461cdd1",
            clientSecret:
                "gloas-abd53d34b824b697ce8d1eca71d86be59a0899d3f718d1019d7e7a624ff16820",
        }),

    ],
}


