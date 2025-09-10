export interface LoginResponse {
  user: {
    id: string;
    username: string;
    email: string;
  };
}

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string;
    username: string;
    accessToken: string;
  }

  interface Session extends DefaultSession {
    id: string;
    username: string;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    username: string;
    accessToken: string;
    email: string;
  }
}
