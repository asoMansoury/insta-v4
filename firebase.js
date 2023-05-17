// Import the functions you need from the SDKs you need

import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey:  process.env.NEXTAUTH_PUBLIC_FIREBASE_API_KEY ,

  authDomain: process.env.NEXTAUTH_PUBLIC_FIREASE_AUTH_DOMAIN,

  projectId: process.env.NEXTAUTH_PUBLIC_FIREBASE_PROJECT_ID,

  storageBucket: process.env.NEXTAUTH_PUBLIC_FIREBASE_STORAGE_BUCKER,

  messagingSenderId: process.env.NEXTAUTH_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.NEXTAUTH_PUBLIC_FIREBASE_APP_ID

};


// Initialize Firebase

const app =!getApps().length>0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage }

