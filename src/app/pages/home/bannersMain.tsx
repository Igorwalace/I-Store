//React
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Imports Pages
import InfoBannerMobile from './Componentes_Home/infoBannerMobile'
import { Products } from '../produtos/ArrayProducts'

const BannersMain = () => {
    return (
        <>
            <main className='my-5 flex gap-6 justify-around items-center overflow-x-auto scrollbar-hide' >
                <Link href='/pages/mouses' className="md:min-w-[600px] md:min-h-[215px] h-[150px] w-full bg-[#36393C] rounded-xl flex items-center justify-center hover:scale-[1.01] duration-200 cursor-pointer">
                    <div className="flex items-center justify-center md:space-x-9 space-x-3">

                        <div className='text-white' >
                            <h1 className='md:text-base text-sm font-light' >até
                                <span className='md:text-[42px] text-4xl font-extrabold md:leading-[25px] text-[#8162FF]' >55%</span>
                                <span className='md:text-base text-sm' >de</span>
                            </h1>
                            <h1 className='md:text-2xl text-xl font-extrabold md:leading-[10px] leading-3' >Desconto</h1>
                            <h1 className='md:text-base text-sm font-light' >em Mouses</h1>
                        </div>
                        <div>
                            {Products
                                .filter(image => image.type == 'Mouse')
                                .slice(0, 1)
                                .map((image: any) => (
                                    <Image
                                        className='w-[113px] h-[97px] md:w-[140px] md:h-[120px]'
                                        key={image.id}
                                        src={image.img}
                                        width={500}
                                        height={500}
                                        alt="cart"
                                    />

                                ))}
                        </div>
                    </div>
                </Link>
                <div className="md:min-w-[600px] md:min-h-[215px] h-[150px] w-full bg-[#36393C] rounded-xl hidden md:flex items-center justify-center hover:scale-[1.01] duration-200 cursor-pointer">
                    <InfoBannerMobile />
                </div>
            </main>
        </>
    )
}

export default BannersMain