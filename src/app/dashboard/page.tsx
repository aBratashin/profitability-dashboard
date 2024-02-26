import { Metadata } from 'next';
import React from 'react';
import Main from '@/pages/main/Main';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Dashboard() {
  return (
    <>
      <Main />
    </>
  );
}