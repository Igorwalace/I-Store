//React
import React from 'react'

//Imports Pages
import Header from '../header/header'

//React Icons
import { PiMouseSimpleBold } from 'react-icons/pi'
import Footer from '../footer/footer'
import InfoMousesHome from '../home/Componentes_Home/infoMousesHome'

const Page = () => {

    return (
        <>
            <main className='px-5 md:px-10 pb-10'>
                <Header />
                <main className='my-5 text-[#ffff] md:text-left text-center' >
                    <div className='border-[1px] border-[#8162FF] p-2 px-3 rounded-xl inline-block' >
                        <h1 className='flex items-center gap-3' >
                            <span><PiMouseSimpleBold size={20}  /></span>
                            Mouses
                        </h1>
                    </div>
                    <InfoMousesHome />
                </main>
            </main>
            <div className='fixed bottom-0 left-0 right-0' >
                <Footer />
            </div>
        </>
    )
}

export default Page