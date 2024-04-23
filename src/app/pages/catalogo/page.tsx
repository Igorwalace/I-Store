import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Image from 'next/image'
import { GrCatalogOption } from 'react-icons/gr'
import { ProductsCatalogo } from './arrayProductsCatalogo'

const PageCatalogo = () => {
  return (
    <>
      <main className='px-5 md:px-10' >
        <Header />
        <div className='my-5 text-[#ffff]' >
          <div className='border-[1px] border-[#8162FF] p-2 px-3 rounded-xl inline-block' >
            <h1 className='flex items-center gap-3' >
              <span><GrCatalogOption size={20} /></span>
              Catálogo
            </h1>
          </div>

          <div className='my-5 mb-[60px] flex' >

            <div className='flex flex-wrap items-center justify-center gap-5'  >
              {ProductsCatalogo
              .map((info: any) => (
                <div key={info.id}>
                  <div className='bg-[#5033C3] flex items-center justify-center md:min-w-[356px] md:min-h-[175px] h-[150px] w-[160px] rounded-lg' >
                    <Image
                      className='w-[100px] h-[53px] md:w-[155px] md:h-[82px]'
                      src={info.img}
                      width={500}
                      height={500}
                      alt="cart"
                    />
                  </div>
                  <h1 className='bg-[#2A2A2A] w-full rounded-md p-2 text-center md:text-lg font-bold' >{info.title}</h1>
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

