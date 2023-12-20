"use client"
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
      <main className="w-full min-h-screen flex-col items-center justify-between p-5">
        <h1>Homepage</h1>
      </main>
    </SessionProvider>
  )
}
