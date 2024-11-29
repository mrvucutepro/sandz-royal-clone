import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth ({
  providers: [
    CredentialsProvider({
        name: 'Creadentials',
        credentials:{
            username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
            password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials, req) {

            const res = await fetch('http://localhost:3000/login', {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { 'Content-Type': 'application/json' },
            });
            const user = await res.json();
            if (res.ok && user) {
              return user;
            }
            return null;
          },
    })
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
})

