import React from 'react'
import { FaRegKeyboard } from 'react-icons/fa6'

const Categorias = () => {
    return (
        <>
            <main className='my-7 text-white' >
                <div className='flex items-center flex-wrap justify-between md:text-sm text-base' >
                    <div className='flex md:max-w-[33%] w-full gap-4 justify-around p-1' >
                        <div className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full' >
                            <FaRegKeyboard size={20} />
                            <h1>Teclados</h1>
                        </div>
                        <div className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full' >
                            <FaRegKeyboard size={20} />
                            <h1>Teclados</h1>
                        </div>
                    </div>
                    <div className='flex md:max-w-[33%] w-full gap-4 justify-between p-1' >
                        <div className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full' >
                            <FaRegKeyboard size={20} />
                            <h1>Teclados</h1>
                        </div>
                        <div className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full' >
                            <FaRegKeyboard size={20} />
                            <h1>Teclados</h1>
                        </div>
                    </div>
                    <div className='flex md:max-w-[33%] w-full gap-4 justify-between p-1' >
                        <div className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full' >
                            <FaRegKeyboard size={20} />
                            <h1>Teclados</h1>
                        </div>
                        <div className='flex items-center justify-center space-x-2 border-[1px] border-[#2A2A2A] p-1 px-3 rounded-lg w-full' >
                            <FaRegKeyboard size={20} />
                            <h1>Teclados</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Categorias