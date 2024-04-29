'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const AppCarrinhoContext = createContext<any>(undefined);

export function AppContextCarrinho({ children }: {
    children: React.ReactNode;
}) {

    const [carrinho, setCarrinho] = useState([])
    const [priceTotal, setPriceTotal] = useState(0)
    const [priceSubTotal, setPriceSubTotal] = useState(0)
    const [priceDisconutTotal, setPriceDiscountTotal] = useState(0)
    const [carrinhoFinal, setCarrinhoFinal] = useState<any[]>([])
    const [meusPedidos, setMeusPedidos] = useState<any[]>([])
    const [carrinhoInfo, setCarrinhoInfo] = useState<any[]>([])
    const [whatNumber, setWhatNumber] = useState(0)
    const CarrinhoFinalArray:any[] = []

    return (
        <AppCarrinhoContext.Provider value={{
            carrinho,
            setCarrinho,
            priceTotal,
            setPriceTotal,
            priceSubTotal,
            setPriceSubTotal,
            priceDisconutTotal,
            setPriceDiscountTotal,
            carrinhoFinal,
            setCarrinhoFinal,
            CarrinhoFinalArray,
            carrinhoInfo,
            setCarrinhoInfo,
            setWhatNumber,
            whatNumber,
            meusPedidos,
            setMeusPedidos
        }} >
            {children}
        </AppCarrinhoContext.Provider>
    )
}

export default function useAppContextCarrinho() {
    return useContext(AppCarrinhoContext)
}