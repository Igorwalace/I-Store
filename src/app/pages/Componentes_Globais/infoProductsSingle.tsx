'use client'
//React
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//Imports Pages
import useAppContext from '@/context/product'

//React Icons
import { FaRegStar, FaStar } from 'react-icons/fa'

interface UserProps {
    info: any
}

const InfoMouseSingle = (props: UserProps) => {
    const info = props.info

    const { setProductsSingle } = useAppContext()

    const handleProductsSingle = (props: []) => {
        setProductsSingle(props)
    }

    return (
        <Link href='/pages/Products_Single' >
            <main
                onClick={() => handleProductsSingle({ ...info })}
                className='hover:scale-95 duration-200 cursor-pointer'>
                <div className='bg-[#1a1a1a] min-w-[156px] min-h-[170px] md:min-w-[180px] md:min-h-[190px] rounded-lg flex items-center justify-center' >
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
                        <h1 className='md:text-lg text-base font-bold flex flex-nowrap' >R$ {info.price.replace(".", ",")}</h1>
                        <h1 className="md:text-sm text-xs text-[#36393C] font-extralight line-through flex">R$ {info.oldPrice.replace(".", ",")}</h1>
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
            </main>
        </Link>
    )
}

export default InfoMouseSingle