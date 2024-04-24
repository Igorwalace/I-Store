import React from 'react'

//Imports Pages
import { Products } from '../produtos/ArrayProducts'

//React Icons
import InfoProductsSingle from '../Componentes_Globais/infoProductsSingle'

const InfokeyBoard = () => {
    return (
        <>
            <div className='flex md:justify-between justify-around items-center flex-wrap md:gap-4 space-y-4 my-5' >
                {Products
                    .filter(Products => Products.type === "KeyBoard")
                    .sort((a, b) => Math.random() - 0.5)
                    .slice(0, 6)
                    .map((info) => (
                        <div key={info.id}>
                            <InfoProductsSingle info={info} />
                        </div>
                    ))}
            </div>
        </>
    )
}

export default InfokeyBoard