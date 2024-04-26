'use client'
import useAppContext from '@/context/page'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { RiDeleteBin7Line } from 'react-icons/ri'

const CarrinhoClient = () => {
    const { carrinho, setCarrinho } = useAppContext()
    const Carrinho:any[] = []

    for (const idUsers in carrinho) {
        const user = carrinho[idUsers];
        Carrinho.push({
            title: user.title,
            img: user.img,
            price: user.price,
            id: user.id
        });
    }
    const handleDeleteCarrinho = (id:number) => {
        const DeleteCarrinhoProduct:any[] = Carrinho.filter((user: any) => user.id !== id);
        setCarrinho(DeleteCarrinhoProduct)
    }

    return (
        <>
            <div className='flex flex-col gap-4 my-5' >
                {Carrinho.map((info) => (
                    <div key={info.id}>
                        <div className='flex items-center justify-between gap-3 w-full' >
                            <div className='flex items-center gap-3' >
                                <div className='bg-[#1A1A1A] md:w-[91px] md:h-[91px] w-[77px] h-[77px] flex justify-center items-center rounded-xl' >
                                    <Image
                                        className='w-full h-full'
                                        src={info.img}
                                        width={500}
                                        height={500}
                                        style={{
                                            objectFit: 'contain'
                                        }}
                                        alt={info.title}
                                    />
                                </div>
                                <div>
                                    <h1 className='md:text-sm text-xs' >{info.title}</h1>
                                    <h1 className='md:text-base text-sm font-bold' >{info.price}</h1>
                                    <div className='flex items-center gap-2' >
                                        <button className='border-2 border-[#2A2A2A] text-white p-2 rounded-md hover:scale-105 duration-200' ><h1><FaArrowLeft /></h1></button>
                                        <div className='text-white p-2 text-sm md:text-base' ><h1>1</h1></div>
                                        <button className='border-2 border-[#2A2A2A] text-white p-2 rounded-md hover:scale-105 duration-200' ><h1><FaArrowRight /></h1></button>
                                    </div>
                                </div>
                            </div>
                            <div 
                            onClick={()=>handleDeleteCarrinho(info.id)}
                            className='border-2 border-[#2A2A2A] p-2 flex items-center justify-center rounded-md' 
                            > 
                                <button><RiDeleteBin7Line size={15} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CarrinhoClient