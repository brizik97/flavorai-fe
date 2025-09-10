import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserProfile, login } from '@/lib/api';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (credentials?.email && credentials?.password) {
            const res = await login({
              email: credentials?.email,
              password: credentials?.password,
            });
            const { accessToken } = res;
            if (!accessToken) return null;

            const user = await getUserProfile({ token: accessToken });
            if (!user) return null;

            return {
              id: user.id,
              username: user.username,
              email: user.email,
              accessToken,
            };
          }
          return null;
        } catch {
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.email = user?.email || '';
        token.username = user?.username || '';
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        username: token.username,
        name: token?.name || '',
        accessToken: token.accessToken,
      };
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
