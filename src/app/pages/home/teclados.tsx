//React
import React from 'react'

//Pages
import InfokeyBoard from '../Componentes_Global_KeyBoard/infoKeyBoar'

//React icons
import { CiKeyboard } from 'react-icons/ci'

const Teclados = () => {
    return (
        <>
            <main className='my-5' >
                <div className='mb-2' >
                    <h1 className='text-[#ffff] md:text-lg text-base font-bold flex items-center gap-3'><CiKeyboard size={20} />TECLADOS</h1>
                </div>
                <InfokeyBoard />
            </main>
        </>
    )
}

export default Teclados