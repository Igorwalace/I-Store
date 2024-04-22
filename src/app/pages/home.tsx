import React from 'react'

//Imports
import Header from './header'
import Banner from './banner'
import Categorias from './categorias'
import Ofertas from './ofertas'
import BannersMain from './bannersMain'

const Page = () => {

    return (
        <>
            <main className='px-5 md:px-10' ><Header /></main>

                <Banner />
                
            <main className='px-5 md:px-10'>
                <Categorias />
                <Ofertas />
                <BannersMain />
            </main>
        </>
    )
}

export default Page
