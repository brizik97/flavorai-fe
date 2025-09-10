import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import DesktopHeader from '@/components/headers/DesktopHeader';
import MobileHeader from '@/components/headers/MobileHeader';
import { SessionProvider } from 'next-auth/react';
import AuthProvider from '@/components/providers/AuthProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FlavorAI',
  description: 'FlavorAI - food blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AppRouterCacheProvider>
            <DesktopHeader />
            <MobileHeader />
            {children}
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
