'use client'
import { createContext, useContext, useEffect, useState } from "react"

//FireBase
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "@/app/pages/firebase/firebaseConfig";

export const AppAuthContexto = createContext<any>(undefined);

export function AppAuth({ children }: {
    children: React.ReactNode;
}) {
    const providerGoogle = new GoogleAuthProvider();
    const providerFacebook = new FacebookAuthProvider();

    const [photoUrl, setPhotoUrl] = useState<string | null>()
    const [infoUser, setInfoUser] = useState<any>()
    const [tokenUser, setTokenUser] = useState<string | number>()
    const [uid, setUid] = useState<string | number>()

    const handleLoginGoogle = async () => {
        await signInWithPopup(auth, providerGoogle)
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
                alert(errorMessage)
            });
    }

    const handleLoginFacebook = async () => {
        await signInWithPopup(auth, providerFacebook)
            .then((result) => {
                const user = result.user;
                const credential: any = FacebookAuthProvider.credentialFromResult(result);
                const accessToken: any = credential.accessToken;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                alert(errorMessage)
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
            handleLoginGoogle,
            photoUrl,
            handleLoginFacebook
        }} >
            {children}
        </AppAuthContexto.Provider>
    )
}

export default function useAppAuthContext() {
    return useContext(AppAuthContexto)
}