import React from 'react'

//Imports
import Header from './header'
import Banner from './componentes/banner'
import Categorias from './categorias'
import Ofertas from './ofertas'
import BannersMain from './bannersMain'
import Teclados from './teclados'
import BannerMobile from './componentes/bannerMobile'
import BannerFretefree from './bannerMainFreteFree'
import Mouses from './mouses'

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
        </>
    )
}

export default Page
