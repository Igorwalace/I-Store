'use client'
//React
import React from 'react'

//React Icons
import { IoPerson } from 'react-icons/io5'

//Imports Pages
import Carrinho from '../carrinho'

//Imports Contexto
import useAppAuthContext from '@/context/auth'
import Image from 'next/image'

const IconPersonAuth = () => {
    const { handleLogin, uid, tokenUser, infoUser, photoUrl } = useAppAuthContext()

    return (
        <>
            <div className='flex flex-row-reverse items-center gap-4' >
                {!tokenUser ?
                    <div
                        onClick={() => handleLogin()}
                        className='border-[1px] border-[#2A2A2A] p-2 rounded cursor-pointer hover:scale-110 hover:text-[#c1c1c1] duration-200'
                    >
                        <IoPerson size={20} />

                    </div>
                    :
                    <div
                        className='border-[1px] border-[#2A2A2A] rounded-xl cursor-pointer hover:scale-110 hover:text-[#c1c1c1] duration-200'
                    >
                        <Image
                            className='w-[30px] h-[30px] md:w-[30px] md:h-[30px] rounded-xl'
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
                <Carrinho />
            </div>
        </>
    )
}

export default IconPersonAuth