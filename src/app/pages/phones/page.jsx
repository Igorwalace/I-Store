//React
import React from 'react'

//Imports Pages
import Header from '../header/header'
import Footer from '../footer/footer'
import Info_Phones from './info_Phones'

//React Icons
import { FaHeadphones } from 'react-icons/fa6'

const Page = () => {

    return (
        <>
            <main className='px-5 md:px-10 pb-10'>
                <Header />
                <main className='my-5 text-[#ffff] md:text-left text-center' >
                    <div className='border-[1px] border-[#8162FF] p-2 px-3 rounded-xl inline-block' >
                        <h1 className='flex items-center gap-3' >
                            <span><FaHeadphones size={20}  /></span>
                            Fones
                        </h1>
                    </div>
                    <Info_Phones />
                </main>
            </main>
            <div className='fixed bottom-0 left-0 right-0' >
                <Footer />
            </div>
        </>
    )
}

export default Page