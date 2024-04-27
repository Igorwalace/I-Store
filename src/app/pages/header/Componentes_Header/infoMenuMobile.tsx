'use client'
import useAppAuthContext from '@/context/auth'
import React from 'react'
import { IoPerson } from 'react-icons/io5'

const InfoMenuMobile = () => {

    const { tokenUser, handleLogin } = useAppAuthContext()

    return (
        <>
            {!tokenUser &&
                <div className='text-left m-1 pt-4 flex gap-2 items-center cursor-pointer'>
                    <span><IoPerson size={20} /></span>
                    <button onClick={()=>handleLogin()} >Login</button>
                </div>
            }
        </>
    )
}

export default InfoMenuMobile