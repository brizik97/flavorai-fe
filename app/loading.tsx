import Loader from '@/components/loader/Loader';
import React, { Suspense } from 'react';

export default function Loading({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
