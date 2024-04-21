import React from 'react'
import Header from './header'
import Banner from './banner'

const Page = () => {

    return (
        <>
            <main className='px-5 md:px-10' >
                <Header />
            </main>
                <Banner />
        </>
    )
}

export default Page