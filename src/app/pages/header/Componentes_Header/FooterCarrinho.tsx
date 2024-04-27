'use client'
import React from 'react'

//imports Pages
import PrecoCarrinho from './precosCarrinho'

//Import Contexto
import useAppContextCarrinho from '@/context/contextCarrinho'

const FooterCarrinho = () => {

  const { carrinho } = useAppContextCarrinho()

  return (
    <>
      {carrinho.length > 0 &&
        <div className='relative bottom-0 left-0 right-0' >
          <div className='p-3' >
            <PrecoCarrinho />
          </div>
          <div className='w-full my-5 cursor-pointer p-2 rounded-xl bg-[#5033C3] uppercase text-center hover:scale-105 duration-200' >
            <button>Finalizar Compra</button>
          </div>
        </div>
      }
    </>
  )
}

export default FooterCarrinho