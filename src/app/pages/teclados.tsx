//React
import React from 'react'
import Image from 'next/image'

//Pages
import { Products } from './ArrayProducts'

//React icons
import { FaRegStar, FaStar } from 'react-icons/fa'

const Teclados = () => {
    return (
        <>
            <main className='my-5' >
                <div className='mb-2' >
                    <h1 className='text-[#ffff] md:text-lg text-base font-bold'>TECLADOS</h1>
                </div>
                <div className='flex justify-between items-center gap-4 overflow-x-auto scrollbar-hide' >
                    {Products.filter(Products => Products.type === "KeyBoard")
                        .slice(0, 6)
                        .map((info) => (
                            <div key={info.id}>
                                <div className='bg-[#1a1a1a] min-w-[156px] min-h-[170px] md:min-w-[180px] md:min-h-[190px] rounded-lg flex items-center justify-center hover:scale-95 duration-200 cursor-pointer' >
                                    <Image
                                        className='w-[150px] h-[135px] md:w-[114px] md:h-[94px]'
                                        src={info.img}
                                        width={500}
                                        height={500}
                                        alt="Image Do Produto"
                                    />
                                </div>
                                <div className="text-white p-1">
                                    <div>
                                        <h1 className='md:text-sm text-xs' >{info.title}</h1>
                                    </div>
                                    <div className='flex items-center gap-3' >
                                        <h1 className='md:text-lg text-base font-bold flex flex-nowrap' >{info.price}</h1>
                                        <h1 className="md:text-sm text-xs text-[#36393C] font-bold line-through flex">{info.oldPrice}</h1>
                                    </div>
                                    <div className="flex items-center text-[#8162FF] gap-2">
                                        <div className='flex items-center' >
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaRegStar />
                                        </div>
                                        <span className='text-xs relative top-[2px]' >(25)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </>
    )
}

export default Teclados