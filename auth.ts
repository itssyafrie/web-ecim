import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { config } from "./constants/url";
import { JWT } from "next-auth/jwt";
import postRegister from "@/api/auth/postRegister";

interface UserSession {
    id: string;
    email: string;
    role: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: { label: "Email", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                let user = null

                const res = await postRegister()

                if (!res.ok) return null

                console.log(res)

                return user
            }
        }),
    ],
    pages: {
        signIn: "/login",
    }
});