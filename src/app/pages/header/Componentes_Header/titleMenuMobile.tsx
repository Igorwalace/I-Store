'use client'
import useAppAuthContext from '@/context/auth'
import { comic_neue } from '@/fonts/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TitleMenuMobile = () => {

    const { tokenUser, photoUrl } = useAppAuthContext()

    return (
        <>
            <div className='text-left flex gap-2 justify-between items-center'>
                <Link href='/' className={`${comic_neue.className} text-4xl`} ><span className='text-[#5033C3]' >I</span>Store</Link>
                {tokenUser &&
                    <div
                        className='border-[1px] border-[#2A2A2A] rounded-xl cursor-pointer hover:scale-110 hover:text-[#c1c1c1] duration-200'
                    >
                        <Image
                            className='w-[40px] h-[40px] md:w-[40px] md:h-[40px] rounded-xl'
                            src={photoUrl}
                            width={500}
                            height={500}
                            style={{
                                objectFit: 'contain'
                            }}
                            alt='Avatar'
                        />

                    </div>
                }
            </div>
        </>
    )
}

export default TitleMenuMobile