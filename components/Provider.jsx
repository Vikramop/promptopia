'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

const provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default provider;
