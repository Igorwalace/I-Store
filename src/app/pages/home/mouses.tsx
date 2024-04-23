//React
import React from 'react'

//Pages
import InfoMouses from '../Componentes_Global_Mouse/infoMouses'

//React icons
import { PiMouseSimpleBold } from 'react-icons/pi'

const Mouses = () => {
    return (
        <>
            <main className='my-5' >
                <div className='mb-2' >
                    <h1 className='text-[#ffff] md:text-lg text-base font-bold flex items-center gap-3'><PiMouseSimpleBold size={20} />MOUSES</h1>
                </div>
                <InfoMouses />
            </main>
        </>
    )
}

export default Mouses