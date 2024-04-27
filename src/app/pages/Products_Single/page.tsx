//React
import React from 'react'

//Imports Pages
import Products_Single from './Products_Single'
import Header from '../header/header'
import Footer from '../footer/footer'

const Page = () => {
    return (
        <>
            <main className='px-5 md:px-10' >
                <Header />
            </main>
                <Products_Single />
                <Footer />
        </>
    )
}

export default Page