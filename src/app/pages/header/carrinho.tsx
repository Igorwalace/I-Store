
//React
import React from 'react'
import Link from 'next/link'

//React Icons
import { SlMenu } from 'react-icons/sl'
import { IoPerson } from 'react-icons/io5'
import { MdOutlineHome } from 'react-icons/md'
import { FiBook } from 'react-icons/fi'
import { PiLinkSimpleHorizontalLight } from 'react-icons/pi'

//Fonts
import { comic_neue } from '@/fonts/fonts'

//Shadcn/ui
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaCartShopping } from 'react-icons/fa6'
import CarrinhoClient from './CarrinhoClient'

const Carrinho = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger className='outline-none' >
                    <div className='border-[1px] border-[#2A2A2A] p-2 rounded outline-none hover:scale-110 hover:text-[#c1c1c1] duration-200' >
                        <FaCartShopping size={20} />
                    </div>
                </SheetTrigger>
                <SheetContent side='right' className="w-[80%] bg-black text-white border-none overflow-auto scrollbar-hide" >
                    <SheetHeader>
                        <SheetTitle className='text-left text-white ' >
                            <Link href='/' className={`${comic_neue.className} text-4xl`} ><span className='text-[#5033C3]' >I</span>Store</Link>
                        </SheetTitle>
                        <div className='ml-2' >
                            <CarrinhoClient />
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Carrinho