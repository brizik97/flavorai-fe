'use client';

import React from 'react';
import { SessionProvider, useSession } from 'next-auth/react';
import Loader from '../loader/Loader';
import axios from 'axios';

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <SessionLoading>{children}</SessionLoading>
    </SessionProvider>
  );
};

const SessionLoading = ({ children }: Props) => {
  const session = useSession();

  if (session?.status === 'loading') {
    return <Loader />;
  } else if (session?.status === 'authenticated') {
    const accessToken = session.data?.accessToken;
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  }

  return <>{children}</>;
};

export default AuthProvider;
