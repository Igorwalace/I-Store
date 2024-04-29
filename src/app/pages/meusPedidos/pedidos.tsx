'use client'
import useAppContextCarrinho from '@/context/contextCarrinho'
import React from 'react'
import Image from 'next/image'

const Pedidos = () => {
    const { carrinho, setCarrinhoFinal, carrinhoFinal, carrinhoInfo, priceTotal, priceSubTotal, priceDisconutTotal } = useAppContextCarrinho()

    return (
        <>
            {carrinhoInfo == 0 && <div className='text-center' >Você nâo tem pedidos.</div>}

            {
                carrinhoInfo.map((info: any, index: any) => (
                    <main key={index} className='border-[1px] border-[#2A2A2A] p-3 rounded-xl' >
                        <div className='flex justify-between items-center border-[#2A2A2A] border-b-[1px] p-2 pb-5' >
                            <div>
                                <h1 className='md:text-base text-sm' >Número do Pedido</h1>
                                <h1 className='md:text-sm text-xs text-[#A1A1A1]' >#{info.numero}</h1>
                            </div>
                            <div>
                                <h1 className='md:text-base text-sm' >Status</h1>
                                <h1 className='md:text-sm text-xs text-[#A1A1A1]' >{info.status}</h1>
                            </div>
                            <div>
                                <h1 className='md:text-base text-sm' >Número do Pedido</h1>
                                <h1 className='md:text-sm text-xs text-[#A1A1A1]' >{info.data}</h1>
                            </div>
                            <div>
                                <h1 className='md:text-base text-sm' >Pagamento</h1>
                                <h1 className='md:text-sm text-xs text-[#A1A1A1]' >Cartão</h1>
                            </div>
                            <div className='text-[#8162FF]' >
                                <h1  >Detalhes do Pedido</h1>
                            </div>
                        </div>
                        <div>
                            {carrinhoFinal.map((item: any, index: any) => (
                                <div key={index} className='p-3 flex flex-col gap-3 my-3' >
                                    {Object.values(item).map((product: any, i) => (
                                        <div key={i}  >
                                            <div className='flex justify-between gap-3 items-center'>
                                                <div className='flex gap-3 justify-between items-center' >
                                                    <div className='bg-[#1A1A1A] rounded-xl md:w-[92px] md:h-[91px] w-[77px] h-[77px] flex justify-center items-center' >
                                                        <Image
                                                            className='w-[57px] h-[43px] md:w-[65px] md:h-[49px]'
                                                            src={product.img}
                                                            width={500}
                                                            height={500}
                                                            alt={`Image do Produto ${product.title}`}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h1>Vendido e Entregue por IStore</h1>
                                                        <h1 className='md:text-sm text-xs'>{product.title}</h1>
                                                        <h1 className='md:text-xs text-[10px] text-[#A1A1A1]' >Quantidade: {product.quantidade}</h1>
                                                        <div className='flex md:hidden items-center gap-3' >
                                                            <h1>R$ {product.price}</h1>
                                                            <h1>R$ {product.oldPrice}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hidden md:block' >
                                                    <h1>R$ {product.price}</h1>
                                                    <h1 className='text-[#A1A1A1] text-xs line-through' >R$ {product.oldPrice}</h1>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className='border-t-[1px] border-[#1A1A1A] p-3 flex justify-between items-center' >
                                <h1 className='md:text-base text-sm font-extrabolod' >SubTotal</h1>
                                <h1>R${priceSubTotal}</h1>
                            </div>
                            <div className='border-t-[1px] border-[#1A1A1A] p-3 flex justify-between items-center' >
                                <h1 className='md:text-base text-sm font-extrabolod' >Entrega</h1>
                                <h1>R$ 0,00</h1>
                            </div>
                            <div className='border-t-[1px] border-[#1A1A1A] p-3 flex justify-between items-center' >
                                <h1 className='md:text-base text-sm font-extrabolod' >Descontos</h1>
                                <h1>R$ {priceDisconutTotal}</h1>
                            </div>
                            <div className='border-t-[1px] border-[#1A1A1A] p-3 flex justify-between items-center' >
                                <h1 className='md:text-base text-sm font-extrabolod' >Total</h1>
                                <h1>R$ {priceTotal}</h1>
                            </div>
                        </div>
                    </main>
                ))
            }
        </>
    )
}

export default Pedidos

