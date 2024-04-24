import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Imports React
import Header from '../header/header'
import Footer from '../footer/footer'
import { Products } from '../produtos/ArrayProducts'

//React Icons
import { GrCatalogOption } from 'react-icons/gr'

const PageCatalogo = () => {
  return (
    <>
      <main className='px-5 md:px-10' >
        <Header />
        <div className='my-5 text-[#ffff] md:text-left text-center' >
          <div className='border-[1px] border-[#8162FF] p-2 px-3 rounded-xl inline-block' >
            <h1 className='flex items-center gap-3' >
              <span><GrCatalogOption size={20} /></span>
              Catálogo
            </h1>
          </div>

          <div className='my-5 mb-[80px] flex' >

            <div className='flex flex-wrap items-center justify-center gap-5'  >
              {Products
              .filter(Products => Products.type_catalogo == true)
              .sort((a, b)=> Math.random() - 0.5)
              .map((info: any) => (
                <div key={info.id} className='hover:scale-105 duration-200 cursor-pointer'>
                  <Link href={`${info.link_catalogo == 'undefined' ? `/` : `${info.link_catalogo}`}`} className='bg-[#5033C3] flex items-center justify-center md:min-w-[356px] md:min-h-[175px] h-[150px] w-[160px] rounded-t-lg'>
                    <Image
                      className='w-[120px] h-[73px] md:w-[175px] md:h-[89px]'
                      src={info.img_catalogo}
                      width={500}
                      height={500}
                      alt="cart"
                    />
                  </Link>
                  <h1 className='bg-[#2A2A2A] w-full rounded-b-md p-2 text-center md:text-lg font-bold' >{info.title_catalogo}</h1>
                </div>
              ))}
            </div>

          </div>

        </div>
      </main>
      <div className='fixed bottom-0 left-0 right-0' >
        <Footer />
      </div>
    </>
  )
}

export default PageCatalogo

