//React
import React from 'react'

//Pages
import { Products } from '../produtos/ArrayProducts'

//React icons
import { RiStoreLine } from 'react-icons/ri'
import InfoProductsSingle from '../Componentes_Globais/infoProductsSingle'

const Ofertas = () => {
    return (
        <>
            <main className='my-5' >
                <div className='mb-2' >
                    <h1 className='text-[#ffff] md:text-lg text-base font-bold flex items-center gap-3'><RiStoreLine size={20} />OFERTAS</h1>
                </div>
                <div className='flex justify-between items-center gap-4 overflow-x-auto scrollbar-hide' >
                    {Products
                        .sort((a, b) => Math.random() - 0.5)
                        .slice(0, 6)
                        .map((info) => (
                            <div key={info.id}>
                                <InfoProductsSingle info={info} />
                            </div>
                        ))}
                </div>
            </main>
        </>
    )
}

export default Ofertas