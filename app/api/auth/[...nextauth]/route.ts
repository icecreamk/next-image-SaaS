import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text", placeholder: "kk" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null
                const { username, password } = credentials
                if (username !== 'kk' || password !== '123123') {
                    return null
                }
                return {
                    id: '1',
                    ...credentials
                }
            }
        })
    ]
})

export { handler as GET, handler as POST }