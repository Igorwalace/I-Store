'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
    children: React.ReactNode;
}) {
    const [menu, setMenu] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [infoUser, setInfoUser] = useState([])
    const [tokenUser, setTokenUser] = useState(null)
    const [uid, setUid] = useState(null)

    const [productsSingle, setProductsSingle] = useState(
        typeof window !== 'undefined'
            ? JSON.parse(localStorage.getItem('ProductsSingle') || '[]')
            : [] // Empty array for Node.js builds
    );

    useEffect(() => {
        localStorage.setItem('ProductsSingle', JSON.stringify(productsSingle))
    }, [productsSingle])

    return (
        <AppContext.Provider value={{
            menu,
            setMenu,
            isLogin,
            setIsLogin,
            infoUser,
            setInfoUser,
            uid,
            setUid,
            tokenUser,
            setTokenUser,
            productsSingle,
            setProductsSingle,
        }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppContext() {
    return useContext(AppContext)
}