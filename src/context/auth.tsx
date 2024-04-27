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

    const [photoUrl, setPhotoUrl] = useState<string | null>(
        typeof window !== 'undefined'
            && JSON.parse(localStorage.getItem('PhotoUrl') || '[]')
    )

    const [infoUser, setInfoUser] = useState<any>(
        typeof window !== 'undefined'
            && JSON.parse(localStorage.getItem('InfoUser') || '[]')
    )

    const [tokenUser, setTokenUser] = useState<string | number>(
        typeof window !== 'undefined'
            && JSON.parse(localStorage.getItem('InfoUser') || '[]')
    )

    const [uid, setUid] = useState<string | number>(
        typeof window !== 'undefined'
            && JSON.parse(localStorage.getItem('Uid') || '[]')
    )
    
    useEffect(() => {
        localStorage.setItem('Token', JSON.stringify(tokenUser)),
        localStorage.setItem('InfoUser', JSON.stringify(infoUser)),
        localStorage.setItem('Uid', JSON.stringify(uid))
        localStorage.setItem('PhotoUrl', JSON.stringify(photoUrl))
    }, [tokenUser, infoUser, uid, photoUrl])


    const handleLogin = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential:any = GoogleAuthProvider.credentialFromResult(result);
                const token:any = credential.accessToken;
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