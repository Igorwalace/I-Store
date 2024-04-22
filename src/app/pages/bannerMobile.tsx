import React from 'react'
import InfoBannerMobile from './infoBannerMobile'

const BannerMobile = () => {
    return (
        <>
            <main className='my-5' >
                <div className="md:min-h-[215px] h-[150px] w-full bg-[#36393C] rounded-xl md:hidden flex items-center justify-center hover:scale-[1.01] duration-200 cursor-pointer">
                    <InfoBannerMobile />
                </div>
            </main>
        </>
    )
}

export default BannerMobile