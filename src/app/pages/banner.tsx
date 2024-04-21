import React from 'react'
import Image from 'next/image'

const banner = () => {
    return (
        <>
            <main className='md:min-h-[500px] min-h-40 md:rounded rounded-xl bg-[#5033C3] relative text-white flex items-center justify-center md:m-0 m-5 p-2' >
                <div className='hidden md:block bg-cover bg-no-repeat bg-center absolute top-0 left-0 right-0 bottom-0 opacity-[15%]' id='banner'></div>
                <div className='flex flex-row-reverse md:flex-row items-center justify-around md:space-x-9 space-x-3' >

                    <div className='text-center hidden md:block' >
                        <h1 className='text-5xl font-bold' >ofertas </h1>
                        <h1 className='text-5xl font-bold' >Imperdíveis</h1>
                    </div>
                    <div>
                        <Image
                            className='w-[150px] h-[135px] md:w-[254px] md:h-[266px]'
                            src="/cart.png"
                            width={500}
                            height={500}
                            alt="cart"
                        />
                    </div>
                    <div>

                        <h1 className='md:text-2xl text-base' >até <span className='md:text-[90px] text-4xl font-bold md:leading-[25px]' >55%</span> </h1>
                        <h1 className='md:text-6xl text-2xl font-bold md:leading-[35px] leading-3' >Desconto</h1>
                        <h1 className='md:text-2xl text-base' >até esse mês</h1>
                    </div>

                </div>
            </main>
        </>
    )
}

export default banner