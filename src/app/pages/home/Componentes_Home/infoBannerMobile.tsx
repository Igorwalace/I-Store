import Image from 'next/image'

const InfoBannerMobile = (): any => {
    return (
        <>
            <div className="flex flex-row-reverse items-center justify-center md:space-x-9 space-x-3">

                <div className='text-white' >
                    <h1 className='md:text-base text-sm font-light' >até
                        <span className='md:text-[42px] text-4xl font-extrabold md:leading-[25px] text-[#8162FF]' >20%</span>
                        <span className='md:text-base text-sm' >de</span>
                    </h1>
                    <h1 className='md:text-2xl text-xl font-extrabold md:leading-[10px] leading-3' >Desconto</h1>
                    <h1 className='md:text-base text-sm font-light' >em Fones</h1>
                </div>
                <div>
                    <Image
                        className='w-[113px] h-[97px] md:w-[140px] md:h-[120px]'
                        src="/phone_banner.png"
                        width={500}
                        height={500}
                        alt="cart"
                    />
                </div>
            </div>
        </>
    )
}

export default InfoBannerMobile