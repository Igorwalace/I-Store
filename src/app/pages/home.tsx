import React from 'react'
import Header from './header'
import Banner from './banner'
import Categorias from './categorias'

const Page = () => {

    return (
        <>
            <main className='px-5 md:px-10' >
                <Header />
            </main>

                <Banner />
                
            <main className='px-5 md:px-10'>
                <Categorias />
            </main>
        </>
    )
}

export default Page