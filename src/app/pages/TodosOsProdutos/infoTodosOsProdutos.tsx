//React
import React from 'react'

//Pages
import { Products } from '../produtos/ArrayProducts'
import InfoProductsSingle from '../Componentes_Globais/infoProductsSingle'

//React icons


const InfoTodosOsProdutos = () => {

    return (
        <>
            <div className='flex md:justify-between justify-around items-center flex-wrap md:gap-4 space-y-4 my-5' >
                {Products
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

export default InfoTodosOsProdutos