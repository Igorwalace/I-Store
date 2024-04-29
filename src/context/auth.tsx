'use client'
import { createContext, useContext, useEffect, useState } from "react"

//FireBase
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/pages/firebase/firebaseConfig";

export const AppAuthContexto = createContext<any>(undefined);

export function AppAuth({ children }: {
    children: React.ReactNode;
}) {
    const provider = new GoogleAuthProvider();

    const [photoUrl, setPhotoUrl] = useState<string | null>()
    const [infoUser, setInfoUser] = useState<any>()
    const [tokenUser, setTokenUser] = useState<string | number>()
    const [uid, setUid] = useState<string | number>()

    const handleLogin = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential: any = GoogleAuthProvider.credentialFromResult(result);
                const token: any = credential.accessToken;
                const user = result.user;
                setInfoUser(user)
                setUid(user.uid)
                setPhotoUrl(user.photoURL)
                setTokenUser(token)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error)
            });
    }

    return (
        <AppAuthContexto.Provider value={{
            infoUser,
            setInfoUser,
            uid,
            setUid,
            tokenUser,
            setTokenUser,
            handleLogin,
            photoUrl
        }} >
            {children}
        </AppAuthContexto.Provider>
    )
}

export default function useAppAuthContext() {
    return useContext(AppAuthContexto)
}