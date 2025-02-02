import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            authorization: {
                url: "https://github.com/login/oauth/authorize",
                params: {
                    scope: "repo read:org read:issues read:project",
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token; // Store access token in JWT
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string; // Pass token to session
            return session;
        },
    },
};

export default NextAuth(authOptions);
