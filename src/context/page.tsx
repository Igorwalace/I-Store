'use client'
import { createContext, useContext, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
    children: React.ReactNode;
}) {
    const [menu, setMenu] = useState(false)

    return (
        <AppContext.Provider value={{menu, setMenu}} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppContext() {
    return useContext(AppContext)
}