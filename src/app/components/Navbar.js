"use client" 
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react';
export default function Navbar(){
    const { data: session, status } = useSession()

    return (
        <nav className="flex items-center justify-between gap-5">
            <Image
                src="/menuase-nobg.png"
                alt="Menuase App"
                className="shrink"
                width={200}
                height={75}
                priority
            />
            <ul className="flex gap-5">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/recipes"}>Recipes</Link>
                </li>
                <li>
                    <Link href={"/faq"}>FAQ</Link>
                </li>
                <li>
                    <Link href={"/mealplan"}>Generate a Meal Plan</Link>
                </li>
            </ul>
            {status === "unauthenticated" && 
            <button onClick={() => signIn()} className="px-5 py-2 rounded bg-red-600 hover:bg-red-400 transition-all hover:font-bold">Sign in</button>
            }
            {status === "authenticated" && 
            <button onClick={() => signOut()}>Sign out</button>
            }
        </nav>
    );
}