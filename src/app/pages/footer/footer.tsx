//React
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-[#1A1A1A] p-2 text-[#676767] text-center overflow-hidden' >
                <h1 className='hover:scale-105 duration-200' >Desenvolvido por <Link href='https://my-website-igor-eight.vercel.app/' target='_blank' className='text-[#8162FF] underline'>Igor Walace</Link></h1>
            </div>
        </>
    )
}

export default Footer