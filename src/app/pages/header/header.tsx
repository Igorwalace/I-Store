//React
import React from 'react'
import Link from 'next/link'

//React Icons

//Fonts
import { comic_neue } from '@/fonts/fonts'

//imports Page
import MenuMobile from './menuMobile'
import IconPersonAuth from './Componentes_Header/IconPersonAuth'

const Header = () => {

    return (
        <>
            <main>
                <div className="text-white flex justify-between items-center py-6 border-b-[1px] border-[#2A2A2A]">
                        <MenuMobile />
                    <div>
                        <Link href='/' className={`${comic_neue.className} text-4xl`} ><span className='text-[#5033C3]' >I</span>Store</Link>
                    </div>
                    <nav className='md:block hidden' >
                        <ul className='flex items-center space-x-4' >
                            <Link href='/' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Início</Link>
                            <li className='text-[#2A2A2A]' >|</li>
                            <Link href='/pages/catalogo' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Catálogo</Link>
                            <li className='text-[#2A2A2A]' >|</li>
                            <Link href='/pages/meusPedidos' className='hover:scale-105 hover:text-[#c1c1c1] duration-200'>Meus Pedidos</Link>
                        </ul>
                    </nav>
                    <IconPersonAuth />
                </div>
            </main>
        </>
    )
}

export default Header