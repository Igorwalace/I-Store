
import React from 'react'
import Header from '../header/header'
import { IoBagOutline } from 'react-icons/io5'
import Pedidos from './pedidos'

const Page = () => {


    return (
        <>
            <main className='px-5 md:px-10 pb-10 text-white' >
                <Header />
                <main className='my-5' >
                    <div className='mb-5 border-[1px] border-[#8162FF] p-2 px-3 rounded-xl inline-block' >
                        <h1 className='text-[#ffff] md:text-lg text-base font-bold flex items-center gap-3'><IoBagOutline size={20} />Meus Pedidos</h1>
                    </div>
                    <Pedidos />
                </main>
            </main>
        </>
    )
}

export default Page