
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

const MenuMobile = () => {
    return (
        <>
            <main className="md:hidden">
            <Sheet>
                <SheetTrigger className='outline-none' >
                    <div className='border-[1px] border-[#2A2A2A] p-2 rounded outline-none' >
                        <SlMenu size={20} />
                    </div>
                </SheetTrigger>
                <SheetContent side='left' className="w-[80%] bg-black text-white border-none" >
                    <SheetHeader>
                        <SheetTitle className='text-left text-white ' >
                            <Link href='/' className={`${comic_neue.className} text-4xl`} ><span className='text-[#5033C3]' >I</span>Store</Link>
                        </SheetTitle>
                        <div className='ml-2' >
                            <div className='text-left m-1 pt-4 flex gap-2 items-center'>
                                <span><IoPerson size={20} /></span>
                                <h1>Login</h1>
                            </div>
                            <Link href='/' className='text-left m-1 pt-4 flex gap-2 items-center'>
                                <span><MdOutlineHome size={20} /></span>
                                <h1>Home</h1>
                            </Link>
                            <Link href='/pages/catalogo' className='text-left m-1 pt-4 flex gap-2 items-center'>
                                <span><FiBook size={20} /></span>
                                <h1>Catálogo</h1>
                            </Link>
                            {/* <div className='text-left m-1 pt-4 flex gap-2 items-center'>
                                            <RiStoreLine size={20} />
                                            <h1>Ofertas</h1>
                                        </div> */}
                            <Link href='/pages/TodosOsProdutos' className='text-left m-1 pt-4 flex gap-2 items-center'>
                                <span><PiLinkSimpleHorizontalLight size={20} /></span>
                                <h1>Tudo</h1>
                            </Link>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </main>
        </>
    )
}

export default MenuMobile