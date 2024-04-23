import React from 'react'
import Image from 'next/image'

//Imports Pages
import { Products } from '../produtos/ArrayProducts'

//React Icons
import { FaRegStar, FaStar } from 'react-icons/fa'

const InfokeyBoard = () => {
    return (
        <>
            <div className='flex justify-between items-center gap-4 overflow-x-auto scrollbar-hide my-5' >
                {Products
                    .filter(Products => Products.type === "KeyBoard")
                    .sort((a, b) => Math.random() - 0.5)
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
        </>
    )
}

export default InfokeyBoard