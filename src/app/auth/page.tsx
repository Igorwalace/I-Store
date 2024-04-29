'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

//Fonts
import { comic_neue } from '@/fonts/fonts'

//Imports Pages
import useAppAuthContext from '@/context/auth'

//React Icons
import { IoPerson } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaFacebook } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { useRouter } from 'next/navigation'

const Auth = () => {


    const router = useRouter();

    const [isButtonNot, setIsButtonNot] = useState<boolean>(false)
    const { handleLogin, tokenUser} = useAppAuthContext()

    useEffect(() => {
        if (isButtonNot) {
            setTimeout(() => {
                setIsButtonNot(false)
            }, 3000);
        }
    }, [isButtonNot])

    useEffect(() => {
        if (tokenUser) {
            router.push('/')
        }
    }, [tokenUser, router]);

    return (
        <>
            <main className='px-5 md:px-10 text-[#fff] py-6' >
                <div className='flex justify-between items-center border-b-[1px] border-[#2A2A2A] pb-6' >
                    <div>
                        <Link href='/' className={`${comic_neue.className} text-4xl`} ><span className='text-[#5033C3]' >I</span>Store</Link>
                    </div>
                    <div className='flex flex-row-reverse items-center gap-4' >
                        <Link href='/auth' >
                            <div
                                className='border-[1px] border-[#2A2A2A] p-2 rounded cursor-pointer hover:scale-110 hover:text-[#c1c1c1] duration-200'
                            >
                                <IoPerson size={20} />

                            </div>
                        </Link>
                    </div>
                </div>
                <div className='my-5 flex flex-col justify-center items-center gap-5 h-[60vh]' >
                    <button className="flex justify-center items-center gap-3 bg-white text-black rounded-xl outline-none py-2 px-5 hover:scale-105 duration-200 w-[360px]" onClick={handleLogin}>
                        <FcGoogle size={20} />
                        Continuar com Google
                    </button>
                    <button className="flex justify-center items-center gap-3 bg-[#3669b7] text-white rounded-xl outline-none py-2 px-5 hover:scale-105 duration-200 w-[360px]" onClick={() => { setIsButtonNot(true) }}>
                        <FaFacebook size={20} />
                        Continuar com Facebook
                    </button>
                    <button className="border-[1px] border-[#2A2A2A] flex justify-center items-center gap-3 bg-black text-white rounded-xl outline-none py-2 px-5 hover:scale-105 duration-200 w-[360px]" onClick={() => { setIsButtonNot(true) }}>
                        <FaApple size={20} />
                        Continuar com Apple
                    </button>
                </div>
            </main>
            {isButtonNot && (
                <div className='flex justify-center items-center md:text-base text-sm ' >
                    <div
                        className="fixed bottom-[40px] bg-[#0288d1] text-[#001824] rounded-xl md:min-w-[30%] p-2 flex justify-center gap-2 items-center z-[100] hover:scale-105 duration-200 cursor-pointer"
                        onClick={() => {
                            setIsButtonNot(false)
                        }}
                        id="alert"
                    >
                        <IoMdInformationCircleOutline size={20} />
                        <h1>Em breve</h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default Auth