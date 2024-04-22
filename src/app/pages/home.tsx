import React from 'react'
import Header from './header'
import Banner from './banner'
import Categorias from './categorias'
import Ofertas from './ofertas'

const Page = () => {

    return (
        <>
            <main className='px-5 md:px-10' >
                <Header />
            </main>

                <Banner />
                
            <main className='px-5 md:px-10'>
                <Categorias />
                <Ofertas />
            </main>
        </>
    )
}

export default Page
