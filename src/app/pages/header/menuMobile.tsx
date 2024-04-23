'use client'
import useAppContext from '@/context/page'
import React from 'react'
import Header from './header'
import Link from 'next/link'
import { comic_neue } from '@/fonts/fonts'
import { SlMenu } from 'react-icons/sl'
import { IoPerson } from 'react-icons/io5'
import { FaCartShopping } from 'react-icons/fa6'

const MenuMobile = () => {
    const { menu, setMenu } = useAppContext()
    return (
        <>
            {menu &&
                <div className='fixed top-0 left-0 right-0 bottom-0 bg-black z-[1000] px-5 md:px-10 text-white' >
                    <div className="flex justify-between items-center py-6 border-b-[1px] border-[#2A2A2A]">

                        <div className='md:hidden border-[1px] border-[#2A2A2A] p-2 rounded' onClick={() => setMenu(false)}>
                            <SlMenu size={20} />
                        </div>
                        <div>
                            <Link href='/' className={`${comic_neue.className} text-4xl`} ><span className='text-[#5033C3]' >I</span>Store</Link>
                        </div>
                        
                        <div className='flex items-center space-x-4' >
                            <div className='border-[1px] border-[#2A2A2A] p-2 rounded cursor-pointer' ><IoPerson size={20} /></div>
                            <div className='border-[1px] border-[#2A2A2A] p-2 rounded cursor-pointer' ><FaCartShopping size={20} /></div>
                        </div>
                    </div>
                    <nav className='my-5' >
                            <ul className='flex items-center gap-5 justify-center flex-col' >
                                <Link href='/' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Início</Link>
                                <Link href='/pages/catalogo' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Catálogo</Link>
                                <Link href='/' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Ofertas</Link>
                            </ul>
                        </nav>
                </div>
            }
        </>
    )
}

export default MenuMobile