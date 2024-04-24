//React
import React from 'react'

//Pages
import { Products } from '../produtos/ArrayProducts'

//React icons
import InfoProductsSingle from '../Componentes_Globais/infoProductsSingle'


const InfoMouses = () => {

    return (
        <>
            <div className='flex md:justify-between justify-around items-center flex-wrap md:gap-4 space-y-4 my-5' >
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