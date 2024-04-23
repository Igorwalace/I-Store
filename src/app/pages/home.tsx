import React from 'react'

//Imports
import Banner from './home/Componentes_Home/banner'
import Categorias from './home/categorias'
import Ofertas from './home/ofertas'
import BannersMain from './home/bannersMain'
import Teclados from './home/teclados'
import BannerMobile from './home/Componentes_Home/bannerMobile'
import BannerFretefree from './home/bannerMainFreteFree'
import Mouses from './home/mouses'
import Footer from './footer/footer'
import Header from './header/header'

const Page = () => {

    return (
        <>
            <main className='px-5 md:px-10' ><Header /></main>
                <Banner />
            <main className='px-5 md:px-10'>
                <Categorias />
                <Ofertas />
                <BannersMain />
                <Teclados />
                <BannerMobile />
                <BannerFretefree />
                <Mouses />
            </main>
                <Footer />
        </>
    )
}

export default Page
