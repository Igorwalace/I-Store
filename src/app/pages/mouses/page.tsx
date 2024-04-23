import React from 'react'

//Imports Pages
import Header from '../header/header'

//React Icons
import { PiMouseSimpleBold } from 'react-icons/pi'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Image from 'next/image'
import { Products } from '../produtos/ArrayProducts'
import Footer from '../footer/footer'
import InfoMouses from '../Componentes_Global_Mouse/infoMouses'

const Page = () => {
    return (
        <>
            <main className='px-5 md:px-10'>
                <Header />
                <main className='my-5 text-[#ffff]' >
                    <div className='border-[1px] border-[#8162FF] p-2 px-3 rounded-xl inline-block' >
                        <h1 className='flex items-center gap-3' >
                            <span><PiMouseSimpleBold size={20} /></span>
                            Mouses
                        </h1>
                    </div>
                    <InfoMouses />
                    <InfoMouses />
                    <div className='md:hidden block' ><InfoMouses /></div>
                    <div className='md:hidden block' ><InfoMouses /></div>
                </main>
            </main>
            <div className='mt-10' >
                <Footer />
            </div>
        </>
    )
}

export default Page