'use client'
import useAppAuthContext from '@/context/auth'
import Link from 'next/link'
import React from 'react'
import { IoPerson } from 'react-icons/io5'

const InfoMenuMobile = () => {

    const { tokenUser, handleLogin } = useAppAuthContext()

    return (
        <>
            {!tokenUser &&
                <Link href='/auth' >
                    <div className='text-left m-1 pt-4 flex gap-2 items-center cursor-pointer'>
                        <span><IoPerson size={20} /></span>
                        <button>Login</button>
                    </div>
                </Link>
            }
        </>
    )
}

export default InfoMenuMobile