import Link from 'next/link'
import React from 'react'
import { CiDesktopMouse1 } from 'react-icons/ci'
import { FaHeadphones } from 'react-icons/fa'
import { FaRegKeyboard } from 'react-icons/fa6'
import { LuMonitorSmartphone } from 'react-icons/lu'
import { PiComputerTowerDuotone, PiLinkSimpleHorizontalLight } from 'react-icons/pi'
import { TbDeviceIpadStar } from 'react-icons/tb'

const Categorias = () => {
    return (
        <>
            <main className='my-7 text-white' >
                <div className='flex items-center flex-wrap justify-between md:text-sm text-base' >
                    <div className='flex md:max-w-[33%] w-full gap-4 justify-around p-1' >
                        <Link href='/pages/keyBoard' className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full hover:scale-105 cursor-pointer duration-200'>
                            <FaRegKeyboard size={20} />
                            <h1>Teclados</h1>
                        </Link>
                        <Link href='/pages/mouses' className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full hover:scale-105 cursor-pointer duration-200' >
                            <CiDesktopMouse1 size={20} />
                            <h1>Mouses</h1>
                        </Link>
                    </div>
                    <div className='flex md:max-w-[33%] w-full gap-4 justify-between p-1' >
                        <Link href='/pages/phones' className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full hover:scale-105 cursor-pointer duration-200' >
                            <FaHeadphones  size={20} />
                            <h1>Fones</h1>
                        </Link>
                        <Link href='/pages/mousesPads' className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full hover:scale-105 cursor-pointer duration-200' >
                            <TbDeviceIpadStar  size={20} />
                            <h1>Mousepads</h1>
                        </Link>
                    </div>
                    <div className='flex md:max-w-[33%] w-full gap-4 justify-between p-1' >
                        <Link href='/pages/monitores' className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full hover:scale-105 cursor-pointer duration-200' >
                            <LuMonitorSmartphone  size={20} />
                            <h1>Monitores</h1>
                        </Link>
                        <Link href='/pages/TodosOsProdutos' className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full hover:scale-105 cursor-pointer duration-200' >
                            <PiLinkSimpleHorizontalLight size={20} />
                            <h1>Ver Tudo</h1>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Categorias