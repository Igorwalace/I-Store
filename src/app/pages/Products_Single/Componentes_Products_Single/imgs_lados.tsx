'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import useAppContext from '@/context/page'

const Imgs_lados = ({ setCurrentImg, currentImg }: any) => {

    const { productsSingle } = useAppContext()

    const handleChandeImgs = (newImg:string) => {
        setCurrentImg(newImg)
    }

    return (
        <>
            {productsSingle.imagens_lados ? productsSingle.imagens_lados.map((info: string) => (
                <div
                    key={info}
                    onClick={()=> handleChandeImgs(info)}
                    className={`${currentImg == info && 'border-[#8162FF]'}  md:bg-[#0B0B0B] bg-[#1A1A1A] flex items-center justify-center p-2 rounded-2xl border-2 border-[#2A2A2A] cursor-pointer hover:scale-105 duration-200 w-[85px] h-[85px]`} >
                    <Image
                        className='w-ful h-full'
                        style={{
                            objectFit: 'contain'
                        }}
                        src={info}
                        width={500}
                        height={500}
                        alt="Image Do Produto"
                    />
                </div>
            )) : ''
            }
        </>
    )
}

export default Imgs_lados