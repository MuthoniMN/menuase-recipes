import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { cert } from "firebase-admin/app";
import { initFirestore } from "@auth/firebase-adapter";

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: JSON.parse(process.env.FIREBASE_PRIVATE_KEY),
  storageBucket: process.env.FIREBASE_STORAGE,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

if (!admin.apps.length) {
  const app = initializeApp(firebaseConfig);
}

export const firestore = initFirestore({
  credential: cert({
    projectId: JSON.parse(process.env.FIREBASE_PRIVATE_KEY),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  })
})