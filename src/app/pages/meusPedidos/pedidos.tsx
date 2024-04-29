'use client'
import useAppContextCarrinho from '@/context/contextCarrinho'
import React from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'

const Pedidos = () => {
    const { meusPedidos } = useAppContextCarrinho()
    return (
        <>
            {meusPedidos == 0 && <div className='text-center mt-5 flex justify-center items-center' >Você nâo tem pedidos.</div>}

            {meusPedidos.map((info: any, index: any) => (
                <div key={index} className='border-[1px] border-[#2A2A2A] p-3 rounded-xl my-5'  >
                    {Object.values(info.info).map((infoCar: any, index: any) => (
                        <div className='border-[#2A2A2A] border-b-[1px] p-2 pb-5' key={index} >
                            <div className='mb-3 md:hidden' >
                                <h1 className='md:text-base text-sm' >Número do Pedido</h1>
                                <h1 className='md:text-sm text-xs text-[#A1A1A1]' >#{infoCar.numero}</h1>
                            </div>
                            <div className='flex justify-between items-center' >
                                <div className='hidden md:block' >
                                    <h1 className='md:text-base text-sm' >Número do Pedido</h1>
                                    <h1 className='md:text-sm text-xs text-[#A1A1A1]' >#{infoCar.numero}</h1>
                                </div>
                                <div>
                                    <h1 className='md:text-base text-sm' >Status</h1>
                                    <h1 className='md:text-sm text-xs text-[#8162FF]' >{infoCar.status}</h1>
                                </div>
                                <div>
                                    <h1 className='md:text-base text-sm' >Data</h1>
                                    <h1 className='md:text-sm text-xs text-[#A1A1A1]' >{infoCar.data}</h1>
                                </div>
                                <div>
                                    <h1 className='md:text-base text-sm' >Pagamento</h1>
                                    <h1 className='md:text-sm text-xs text-[#A1A1A1]' >Cartão</h1>
                                </div>
                                <div className='text-[#8162FF] flex justify-center items-center gap-2 cursor-pointer' >
                                    <h1><IoIosArrowDown size={20} /></h1>
                                    <h1 className='md:text-base text-sm md:block hidden' >Detalhes do Pedido</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                    {Object.values(info.allProductsCart).map((products: any, index: any) => (
                        <div key={index} className='my-5' >
                            <div className='flex justify-between gap-3 items-center'>
                                <div className='flex gap-3 justify-between items-center' >
                                    <div className='bg-[#1A1A1A] rounded-xl md:w-[92px] md:h-[91px] w-[77px] h-[77px] flex justify-center items-center' >
                                        <Image
                                            className='w-[57px] h-[43px] md:w-[65px] md:h-[49px]'
                                            src={products.img}
                                            width={500}
                                            height={500}
                                            alt={`Image do Produto ${products.title}`}
                                        />
                                    </div>
                                    <div>
                                        <h1 className='font-extralight' >Vendido e Entregue por <span className='font-bold' >IStore</span></h1>
                                        <h1 className='md:text-sm text-xs'>{products.title}</h1>
                                        <h1 className='md:text-xs text-[10px] text-[#A1A1A1]' >Qnt: {products.quantidade}</h1>
                                        <div className='flex md:hidden items-center gap-1' >
                                            <h1 className='text-base font-bold' >R$ {products.price}</h1>
                                            <h1 className='md:text-xs text-[10px] text-[#A1A1A1] line-through' >R$ {products.oldPrice}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:block' >
                                    <h1>R$ {products.price}</h1>
                                    <h1 className='text-[#A1A1A1] text-xs line-through' >R$ {products.oldPrice}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                    {Object.values(info.prices).map((price: any, index: any) => (
                        <div key={index} >
                            <div className='border-t-[1px] border-[#1A1A1A] p-3 flex justify-between items-center' >
                                <h1 className='md:text-base text-sm font-extrabolod' >SubTotal</h1>
                                <h1 className='text-sm' >R$ {String(price.subTotal.toFixed(2).replace(".", ","))}</h1>
                            </div>
                            <div className='border-t-[1px] border-[#1A1A1A] p-3 flex justify-between items-center' >
                                <h1 className='md:text-base text-sm font-extrabolod' >Entrega</h1>
                                <h1 className='font-extralight text-sm' >Grátis</h1>
                            </div>
                            <div className='border-t-[1px] border-[#1A1A1A] p-3 flex justify-between items-center' >
                                <h1 className='md:text-base text-sm font-extrabolod' >Descontos</h1>
                                <h1 className='text-sm' >R$ {String(price.desconto.toFixed(2).replace(".", ","))}</h1>
                            </div>
                            <div className='border-t-[1px] border-[#1A1A1A] p-3 flex justify-between items-center' >
                                <h1 className='md:text-base text-sm font-extrabold' >Total</h1>
                                <h1 className='text-base font-extrabold ' >R$ {String(price.total.toFixed(2).replace(".", ","))}</h1>
                            </div>
                        </div>
                    ))}

                </div>
            ))
            }
        </>
    )
}

export default Pedidos

