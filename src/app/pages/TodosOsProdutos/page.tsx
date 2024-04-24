//React
import React from 'react'

//React Icos
import { PiLinkSimpleHorizontalLight } from 'react-icons/pi'

//Imports Pages
import Header from '../header/header'
import Footer from '../footer/footer'
import InfoTodosOsProdutos from './infoTodosOsProdutos'

const Page = () => {
    return (
        <>
            <main className='px-5 md:px-10'>
                <Header />
                <main className='my-5 text-[#ffff] md:text-left text-center' >
                    <div className='border-[1px] border-[#8162FF] p-2 px-3 rounded-xl inline-block' >
                        <h1 className='flex items-center gap-3' >
                            <span><PiLinkSimpleHorizontalLight size={20} /></span>
                            Todos Os Produtos
                        </h1>
                    </div>
                    <div><InfoTodosOsProdutos /></div>
                </main>
            </main>
            <div className='mt-10' >
                <Footer />
            </div>
        </>
    )
}

export default Page