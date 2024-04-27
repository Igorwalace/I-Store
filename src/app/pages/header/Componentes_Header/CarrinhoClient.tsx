'use client'
//React
import Image from 'next/image'

//Imports Pages
import useAppContextCarrinho from '@/context/contextCarrinho'

//React Icons
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { RiDeleteBin7Line } from 'react-icons/ri'

const CarrinhoClient = () => {
    const { carrinho, setCarrinho, priceTotal, setPriceTotal, setPriceSubTotal, setPriceDiscountTotal } = useAppContextCarrinho()
    const Carrinho: any[] = []

    for (const idUsers in carrinho) {
        const user = carrinho[idUsers];
        Carrinho.push({
            title: user.title,
            img: user.img,
            price: user.price,
            oldPrice: user.oldPrice,
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
            return;
        }

        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: newQuantity,
        }));

        const updatedCarrinho = carrinho.map((item: any) =>
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
            carrinho.reduce((acc: any, item: any) => ({ ...acc, [item.id]: item.quantidade }), {})
        );
    }, [carrinho]);

    useEffect(() => {
        const totalPrice = Carrinho.reduce((acc: any, product: any) => acc + Number(product.price * product.quantidade), 0);
        const totalSubPrice = Carrinho.reduce((acc: any, product: any) => acc + Number(product.oldPrice * product.quantidade), 0);
        const totalDiscount = Carrinho.reduce((acc: any, product: any) => acc + Number((product.oldPrice * product.quantidade) - (product.price * product.quantidade)), 0);
        setPriceTotal(Number(totalPrice))
        setPriceSubTotal(Number(totalSubPrice))
        setPriceDiscountTotal(Number(totalDiscount))
    }, [Carrinho, priceTotal, setPriceDiscountTotal, setPriceSubTotal, setPriceTotal])

    return (
        <>
            <div className='flex flex-col gap-4 my-5' >
                {Carrinho.length < 1 && <div className='flex justify-center items-center font-thin' ><h1>Nenhum produto adicionado.</h1></div>}
                {Carrinho.map((info) => (
                    <div key={info.id} >
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
                                <div className='text-left' >
                                    <h1 className='md:text-lg text-base text-left' >{info.title}</h1>
                                    <div className='flex items-center gap-2' >
                                        <h1 className='md:text-base text-sm font-bold' >R$ {info.price.replace(".", ",")}</h1>
                                        <h1 className='md:text-sm text-xs text-[#2A2A2A] line-through font-extralight' >R$ {info.oldPrice.replace(".", ",")}</h1>
                                    </div>
                                    <div className='flex items-center gap-2' >
                                        <button className='border-[1px] border-[#2A2A2A] text-white md:p-2 p-1 rounded-lg hover:scale-105 duration-200' onClick={() => handleRemoveQuant(info.id)}>
                                            <h1><FaArrowLeft /></h1>
                                        </button>
                                        <div className='text-white p-2 text-sm md:text-base' >
                                            <h1>{quantities[info.id] || info.quantidade}</h1>
                                        </div>
                                        <button className='border-[1px] border-[#2A2A2A] text-white md:p-2 p-1 rounded-lg hover:scale-105 duration-200' onClick={() => handleAddMoreQuant(info.id)}>
                                            <h1><FaArrowRight /></h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => handleDeleteCarrinho(info.id)}
                                className='border-[1px] border-[#2A2A2A] p-2 flex items-center justify-center rounded-lg cursor-pointer hover:scale-110 hover:text-[#c1c1c1] duration-200'
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