import React from 'react'

//Imports
import Categorias from './categorias'
import Ofertas from './ofertas'
import BannersMain from './bannersMain'
import Teclados from './teclados'
import BannerFretefree from './bannerMainFreteFree'
import Mouses from './mouses'
import Header from '../header/header'
import BannerMobile from './Componentes_Home/bannerMobile'
import Footer from '../footer/footer'

const Page = () => {

    return (
        <>
            <main className='px-5 md:px-10' ><Header /></main>
                <BannersMain />
            <main className='px-5 md:px-10'>
                <Categorias />
                <Ofertas />
                <BannersMain />
                <Teclados />
                <BannerMobile/>
                <BannerFretefree />
                <Mouses />
            </main>
                <Footer />
        </>
    )
}

export default Page
