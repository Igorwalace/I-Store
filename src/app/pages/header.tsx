import React from 'react'
import Link from 'next/link'
import { IoPerson } from 'react-icons/io5'
import { FaCartShopping } from 'react-icons/fa6'
import { SlMenu } from 'react-icons/sl'
import { comic_neue } from '@/fonts/fonts'

const Header = () => {
    return (
        <>
            <main>
                <div className="text-white flex justify-between items-center py-6 border-b-[1px] border-[#2A2A2A]">
                    <div className='md:hidden border-[1px] border-[#2A2A2A] p-2 rounded' >
                    <SlMenu size={20} />
                    </div>
                    <div>
                        <Link href='/' className={`${comic_neue.className} text-4xl`} ><span className='text-[#5033C3]' >I</span>Store</Link>
                    </div>
                    <nav className='md:block hidden' >
                        <ul className='flex items-center space-x-4' >
                            <Link href='/' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Início</Link>
                            <li className='text-[#2A2A2A]' >|</li>
                            <Link href='/' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Catálogo</Link>
                            <li className='text-[#2A2A2A]' >|</li>
                            <Link href='/' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Ofertas</Link>
                        </ul>
                    </nav>
                    <div className='flex items-center space-x-4' >
                        <div className='border-[1px] border-[#2A2A2A] p-2 rounded cursor-pointer hidden md:block hover:scale-110 hover:text-[#c1c1c1] duration-200' ><IoPerson size={20} /></div>
                        <div className='border-[1px] border-[#2A2A2A] p-2 rounded cursor-pointer hover:scale-110 hover:text-[#c1c1c1] duration-200' ><FaCartShopping size={20} /></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Header