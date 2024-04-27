import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const ApiKey = process.env.NEXT_API_KEY;
// const AuthDomain = process.env.NEXT_AUTH_DOMAIN;
// const AppId = process.env.NEXT_APP_ID;
// const MessagingSenderId = process.env.NEXT_MESSAGING_SENDER_ID;

const firebaseConfig = {
    apiKey: "AIzaSyDXRt9g14C5xXKsUqzS9OcANsOXwV2qgq4",
    authDomain: "istore-bef15.firebaseapp.com",
    projectId: "istore-bef15",
    storageBucket: "istore-bef15.appspot.com",
    messagingSenderId: "96545053789",
    appId: "1:96545053789:web:cbcc26f5d9a7d0f1f881b4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);