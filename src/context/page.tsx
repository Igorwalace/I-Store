'use client'
import { createContext, useContext, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
    children: React.ReactNode;
}) {
    

    return (
        <AppContext.Provider value={{}} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppContext() {
    return useContext(AppContext)
}