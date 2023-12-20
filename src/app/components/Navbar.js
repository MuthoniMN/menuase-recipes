"use client"
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { signIn, signOut } from 'next-auth/react';
import { options } from "../api/auth/[...nextauth]/options";

export default function Navbar() {
    const session = getServerSession(options)

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
                <li className="cursor-pointer">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="cursor-pointer">
                    <Link href={"/recipes"}>Recipes</Link>
                </li>
                <li className="cursor-pointer">
                    <Link href={"/faq"}>FAQ</Link>
                </li>
                <li className="cursor-pointer">
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