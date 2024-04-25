import React from 'react'
import Image from 'next/image'

const Img = ({ productsSingle }:any) => {
    return (
        <>
            <div className="md:w-[65%] md:h-[618px] h-[380px] w-full bg-[#1A1A1A] my-5 rounded-xl flex items-center justify-center">
                <Image
                    className='w-[270px] h-[202px] md:w-[514px] md:h-[380px]'
                    src={productsSingle.img}
                    width={500}
                    height={500}
                    alt="Image Do Produto"
                />
            </div>
        </>
    )
}

export default Img