'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const AppCarrinhoContext = createContext<any>(undefined);

export function AppContextCarrinho({ children }: {
    children: React.ReactNode;
}) {

    const [carrinho, setCarrinho] = useState(
        typeof window !== 'undefined'
            ? JSON.parse(localStorage.getItem('Carrinho') || '[]')
            : []
    )
    const [priceTotal, setPriceTotal] = useState(0)
    const [priceSubTotal, setPriceSubTotal] = useState(0)
    const [priceDisconutTotal, setPriceDiscountTotal] = useState(0)

    useEffect(() => {
        localStorage.setItem('Carrinho', JSON.stringify(carrinho))
    }, [carrinho])

    return (
        <AppCarrinhoContext.Provider value={{
            carrinho,
            setCarrinho,
            priceTotal,
            setPriceTotal,
            priceSubTotal,
            setPriceSubTotal,
            priceDisconutTotal,
            setPriceDiscountTotal
        }} >
            {children}
        </AppCarrinhoContext.Provider>
    )
}

export default function useAppContextCarrinho() {
    return useContext(AppCarrinhoContext)
}