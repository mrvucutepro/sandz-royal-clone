import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
    providers: [],
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        error: "/auth/error",
        verifyRequest: "/auth/verify",
        newUser: "/auth/new-user"
    }
}