import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import dotenv from 'dotenv';

// dotenv.config();
export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "LoginId", type: "text", placeholder: "SSGPOINT" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        if(!credentials?.loginId || !credentials?.password) return null
        // console.log(process.env.NEXT_PUBLIC_API_URL);
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/log-in`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // TODO: 우리 로그인 받아서 넣을 이름 맞추기
          body: JSON.stringify({
            loginId: credentials?.loginId,
            password: credentials?.password,
          })
        })

        const user = await res.json()
        if (res.ok && user) {
          console.log(user)
          return user
        }else{
          console.log('error');
          
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },

// 여기가 추가된 부분
  pages: {
    signIn: "/login",
    // signOut: "/logout",
  },
// 여기가 추가된 부분

}