//React
import React from 'react'

//Pages
import { Products } from '../produtos/ArrayProducts'

//React icons
import InfoProductsSingle from '../Componentes_Globais/infoProductsSingle'


const InfoMouses = () => {

    return (
        <>
            <div className='flex justify-between items-center gap-4 overflow-x-auto scrollbar-hide my-5' >
                {Products
                    .filter(Products => Products.type === "Mouse")
                    .slice(0, 6)
                    .sort((a, b) => Math.random() - 0.5)
                    .map((info) => (
                        <div key={info.id} >
                            <InfoProductsSingle info={info} />
                        </div>
                    ))}
            </div>
        </>
    )
}

export default InfoMouses