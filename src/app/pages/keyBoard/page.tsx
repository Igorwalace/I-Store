import React from 'react'

//Imports Pages
import Header from '../header/header'
import InfokeyBoard from '../Componentes_Global_KeyBoard/infoKeyBoar'
import Footer from '../footer/footer'

//React Icons
import { CiKeyboard } from 'react-icons/ci'

const Page = () => {
    return (
        <>
            <main className='px-5 md:px-10'>
                <Header />
                <main className='my-5 text-[#ffff] md:text-left text-center' >
                    <div className='border-[1px] border-[#8162FF] p-2 px-3 rounded-xl inline-block' >
                        <h1 className='text-[#ffff] md:text-lg text-base font-bold flex items-center gap-3'><CiKeyboard size={20} />TECLADOS</h1>
                    </div>
                    <InfokeyBoard />
                </main>
            </main>
            <div className='mt-10 absolute bottom-0 left-0 right-0' >
                <Footer />
            </div>
        </>
    )
}

export default Page