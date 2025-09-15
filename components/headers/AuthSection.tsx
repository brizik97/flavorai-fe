'use client';

import { signOut, useSession } from 'next-auth/react';

const AuthSection = () => {
  const { data: session } = useSession();

  const signOutHandler = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div className="flex items-center gap-4">
      {session ? (
        <button
          type="button"
          onClick={signOutHandler}
          className="text-gray-600 hover:text-gray-900 font-semibold text-lg uppercase cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <>
          <a
            href="/auth/login"
            className="text-gray-600 hover:text-gray-900 font-semibold text-lg uppercase"
          >
            Login
          </a>
          <a
            href="/auth/signup"
            className="text-gray-600 hover:text-gray-900 font-semibold text-lg uppercase"
          >
            Sign Up
          </a>
        </>
      )}
    </div>
  );
};

export default AuthSection;
