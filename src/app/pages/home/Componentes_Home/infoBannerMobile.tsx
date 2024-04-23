import Image from 'next/image'
import Link from 'next/link'

const InfoBannerMobile = (): any => {
    return (
        <>
            <div className="flex flex-row-reverse items-center justify-center md:gap-12 gap-9">

                <div className='text-white' >
                    <h1 className='md:text-base text-sm font-light' >até
                        <span className='md:text-[42px] text-4xl font-extrabold md:leading-[25px] text-[#8162FF]' >20%</span>
                        <span className='md:text-base text-sm' >de</span>
                    </h1>
                    <h1 className='md:text-2xl text-xl font-extrabold md:leading-[10px] leading-3' >Desconto</h1>
                    <h1 className='md:text-base text-sm font-light' >em Teclados</h1>
                </div>
                <Link href='/pages/keyBoard'>
                    <Image
                        className='w-[113px] h-[97px] md:w-[140px] md:h-[120px]'
                        src="/teclado_catalogo.png"
                        width={500}
                        height={500}
                        alt="Image de um Teclado"
                    />
                </Link>
            </div>
        </>
    )
}

export default InfoBannerMobile