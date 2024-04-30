'use client'
import React, { useState } from 'react'

//imports Pages
import PrecoCarrinho from './precosCarrinho'

//Import Contexto
import useAppContextCarrinho from '@/context/contextCarrinho'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const FooterCarrinho = () => {

  const { setCarrinho, carrinho, whatNumber, setWhatNumber, priceTotal, priceSubTotal, priceDisconutTotal, setMeusPedidos } = useAppContextCarrinho()
  const [modal, setModal] = useState(false)
  const router = useRouter();

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

    setMeusPedidos((prevOrders: any) => [...prevOrders, newOrder]);
    setModal(true)
    setTimeout(() => {
      router.push('/pages/meusPedidos')
      setCarrinho([])
      setModal(false)
    }, 2000);
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
      {modal &&
        <div className='fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] flex flex-col gap-2 justify-center items-center' >
          <div id='c-loader' ></div>
          <span>Finalizando pedido</span>
        </div>
      }
    </>
  )
}

export default FooterCarrinho