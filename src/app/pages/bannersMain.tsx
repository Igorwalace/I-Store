import React from 'react'
import Image from 'next/image'
import InfoBannerMobile from './infoBannerMobile'

const BannersMain = () => {
    return (
        <>
            <main className='my-5 flex gap-6 justify-around items-center overflow-x-auto scrollbar-hide' >
                <div className="md:min-w-[600px] md:min-h-[215px] h-[150px] w-full bg-[#36393C] rounded-xl flex items-center justify-center hover:scale-[1.01] duration-200 cursor-pointer">
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
                            <Image
                                className='w-[113px] h-[97px] md:w-[140px] md:h-[120px]'
                                src="/mouse_banner.png"
                                width={500}
                                height={500}
                                alt="cart"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:min-w-[600px] md:min-h-[215px] h-[150px] w-full bg-[#36393C] rounded-xl hidden md:flex items-center justify-center hover:scale-[1.01] duration-200 cursor-pointer">
                    <InfoBannerMobile />
                </div>
            </main>
        </>
    )
}

export default BannersMain