'use client'
//React
import React from 'react'

//Import Contexto
import useAppContextCarrinho from '@/context/contextCarrinho'

const PrecoCarrinho = () => {

    const { priceTotal, priceSubTotal, priceDisconutTotal } = useAppContextCarrinho()
    
    return (
        <>
            <main className='font-extralight' >
                <div className='border-t-[1px] border-[#2A2A2A] p-2 flex items-center justify-between' >
                    <h1>SubTotal</h1>
                    <h1>R$ {priceSubTotal.toFixed(2).replace(".", ",")}</h1>
                </div>
                <div className='border-t-[1px] border-[#2A2A2A] p-2 flex items-center justify-between' >
                    <h1>Descontos</h1>
                    <h1>R$ {priceDisconutTotal.toFixed(2).replace('.',',')}</h1>
                </div>
                <div className='border-t-[1px] border-[#2A2A2A] p-2 flex items-center justify-between' >
                    <h1>Entrega</h1>
                    <h1>Grátis</h1>
                </div>
                <div className='border-t-[1px] border-b-[1px] border-[#2A2A2A] p-2 flex items-center justify-between font-extrabold' >
                    <h1>Total</h1>
                    <h1>R$ {priceTotal.toFixed(2).replace(".", ",")}</h1>
                </div>
            </main>
        </>
    )
}

export default PrecoCarrinho