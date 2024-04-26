'use client'
import useAppContext from '@/context/page'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { RiDeleteBin7Line } from 'react-icons/ri'

interface ItemCarrinho {
    id: number;
    title: string;
    img: string;
    price: string;
    quantidade: number; // Quantity should be a number
}

// Type for the entire cart
interface Carrinho {
    itens: ItemCarrinho[];
}

const CarrinhoClient = () => {
    const { carrinho, setCarrinho } = useAppContext()
    const Carrinho: any[] = []

    for (const idUsers in carrinho) {
        const user = carrinho[idUsers];
        Carrinho.push({
            title: user.title,
            img: user.img,
            price: user.price,
            id: user.id,
            quantidade: user.quantidade
        });
    }

    const handleDeleteCarrinho = (id: number) => {
        const DeleteCarrinhoProduct: any[] = Carrinho.filter((user: any) => user.id !== id);
        setCarrinho(DeleteCarrinhoProduct)
    }

    const [quantities, setQuantities] = useState<Record<number, number>>({});

    const handleQuantityChange = (id: number, newQuantity: number) => {
        if (newQuantity < 1) {
            console.warn("Quantity cannot be less than 1.");
            return;
        }

        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: newQuantity,
        }));

        const updatedCarrinho = carrinho.map((item:any) =>
            item.id === id ? { ...item, quantidade: newQuantity } : item
        );
        setCarrinho(updatedCarrinho);
    };

    const handleAddMoreQuant = (id: number) => {
        handleQuantityChange(id, quantities[id] ? quantities[id] + 1 : 1);
    };

    const handleRemoveQuant = (id: number) => {
        handleQuantityChange(id, quantities[id] ? Math.max(quantities[id] - 1, 1) : 1);
    };

    useEffect(() => {
        setQuantities(
            carrinho.reduce((acc:any, item:any) => ({ ...acc, [item.id]: item.quantidade }), {})
        );
    }, [carrinho]);

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
                                        <button className='border-2 border-[#2A2A2A] text-white p-2 rounded-md hover:scale-105 duration-200' onClick={() => handleRemoveQuant(info.id)}>
                                            <h1><FaArrowLeft /></h1>
                                        </button>
                                        <div className='text-white p-2 text-sm md:text-base' >
                                            <h1>{quantities[info.id] || info.quantidade}</h1> {/* Display quantity from state or carrinho */}
                                        </div>
                                        <button className='border-2 border-[#2A2A2A] text-white p-2 rounded-md hover:scale-105 duration-200' onClick={() => handleAddMoreQuant(info.id)}>
                                            <h1><FaArrowRight /></h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => handleDeleteCarrinho(info.id)}
                                className='border-2 border-[#2A2A2A] p-2 flex items-center justify-center rounded-md cursor-pointer hover:scale-110 hover:text-[#c1c1c1] duration-200'
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