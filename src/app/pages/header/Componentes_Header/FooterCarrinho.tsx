'use client'
import React from 'react'

//imports Pages
import PrecoCarrinho from './precosCarrinho'

//Import Contexto
import useAppContextCarrinho from '@/context/contextCarrinho'
import Link from 'next/link'

const FooterCarrinho = () => {

  const { setCarrinho, carrinho, setCarrinhoFinal, carrinhoFinal, setCarrinhoInfo, carrinhoInfo, whatNumber, setWhatNumber, priceTotal, priceSubTotal, priceDisconutTotal, setMeusPedidos } = useAppContextCarrinho()

  const addCart = (allProductsCart: any) => {
    setWhatNumber(whatNumber + 1)
    const date = new Date().getMonth()
    const day = new Date().getDate()
    const year = new Date().getFullYear()
    const data = `${day}/${date}/${year}`
    const numero = Number(whatNumber + 1)
    const status = 'Pago'

    const info = ([
      {
        data: data,
        numero: numero,
        status: status
      }
    ])
    const prices = [
      {
        total: priceTotal,
        subTotal: priceSubTotal,
        desconto: priceDisconutTotal
      }
    ]
    const newOrder = {
      allProductsCart,
      info,
      prices
    };

    setMeusPedidos((prevOrders:any) => [...prevOrders, newOrder]);
  }

  return (
    <>
      {carrinho.length > 0 &&
        <div className='absolute bottom-0 left-0 right-0' >
          <div className='p-3' >
            <PrecoCarrinho />
          </div>
          {/* <Link href='/pages/meusPedidos' > */}
          <div className='w-full my-1 cursor-pointer p-2 rounded-xl bg-[#5033C3] uppercase text-center hover:scale-105 duration-200' onClick={() => addCart({ ...carrinho })}>
            <button>Finalizar Compra</button>
          </div>
          {/* </Link> */}
        </div>
      }
    </>
  )
}

export default FooterCarrinho