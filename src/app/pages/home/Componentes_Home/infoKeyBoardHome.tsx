import React from 'react'

//Imports Pages
import InfoProductsSingle from '../../Componentes_Globais/infoProductsSingle'
import { Products } from '../../produtos/ArrayProducts'

//React Icons

const InfokeyBoardHome = () => {
    return (
        <>
            <div className='flex justify-between items-center gap-4 overflow-x-auto scrollbar-hide my-5' >
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

export default InfokeyBoardHome