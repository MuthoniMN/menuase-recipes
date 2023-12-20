import NextAuth from "next-auth/next";
import { options } from "./options";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "../../config/firebase";

const handler = NextAuth({
    adapter: FirestoreAdapter(firestore),
    ...options
});

export { handler as GET, handler as POST }