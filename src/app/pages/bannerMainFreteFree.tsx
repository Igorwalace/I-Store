import React from 'react'
import Image from 'next/image'

//React Icons
import { BsTruck } from 'react-icons/bs'

const BannerFretefree = () => {
    return (
        <>
            <main className='my-5 hidden md:block ' >
                <div className='w-full h-[250px] bg-gradient-to-r from-[#5033C3] to-[#5033c3d9] rounded-xl flex items-center justify-center' >
                    <div className='text-white font-black' >
                        <h1 className='text-4xl leading-[20px]' >Frete</h1>
                        <h1 className='text-6xl relative left-3 leading-[45px]' >Grátis</h1>

                        <div className='flex items-center border-[1px] border-[#8162FF] p-1 pl-4 rounded-xl relative' >
                            <h1 className='text-sm' >PARA TODO BRASIL</h1>
                            <span className='bg-[#8162FF] p-1 rounded-lg absolute top-0 -right-2 ' ><BsTruck size={20} /></span>
                        </div>

                    </div>
                    <div>
                        <Image
                            className='w-[405px] h-[263px]'
                            src="/car_banner.png"
                            width={500}
                            height={500}
                            alt="Image de Caminhão, logo"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default BannerFretefree