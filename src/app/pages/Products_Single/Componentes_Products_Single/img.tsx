'use client'
//React
import React from 'react'
import Image from 'next/image'

//Imports Pages
import Imgs_lados from './imgs_lados'
import useAppContext from '@/context/product'

const Img = ( {currentImg, setCurrentImg }:any) => {
    const { productsSingle, } = useAppContext()

    return (
        <>
            <div className="md:w-[65%] md:h-[618px] h-[380px] w-full bg-[#1A1A1A] md:my-5 -mt-1 mb-0 md:rounded-xl flex items-center justify-center relative">
                <Image
                    className='w-[270px] h-[202px] md:w-[514px] md:h-[380px]'
                    src={currentImg}
                    width={500}
                    height={500}
                    alt="Image Do Produto"
                />
                <div className='absolute top-8 left-8 md:flex flex-col gap-2 hidden'>
                    <Imgs_lados imgs_lados={productsSingle.imagens_lados} currentImg={currentImg} setCurrentImg={setCurrentImg} />
                </div>
            </div>
        </>
    )
}

export default Img