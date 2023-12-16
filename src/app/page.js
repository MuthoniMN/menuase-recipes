"use client"
import Navbar from './components/Navbar';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
      <main className="w-full min-h-screen flex-col items-center justify-between p-5">
        <Navbar />
      </main>
    </SessionProvider>
  )
}
