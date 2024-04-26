'use client'
import useAppContext from '@/context/page'
import React, { useEffect, useState } from 'react'
import Img from './Componentes_Products_Single/img'
import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar } from 'react-icons/fa'
import { CiDeliveryTruck } from 'react-icons/ci'
import { Products } from '../produtos/ArrayProducts'
import InfoProductsSingle from '../Componentes_Globais/infoProductsSingle'
import Imgs_lados from './Componentes_Products_Single/imgs_lados'

const Products_Single = () => {

  const { productsSingle, setCarrinho, carrinho } = useAppContext()
  const [currentImg, setCurrentImg] = useState(productsSingle.Img)
  const [quant, setQuant] = useState(1)

  useEffect(() => {
    setCurrentImg(productsSingle.imagens_lados[0])
    setQuant(1)
  }, [productsSingle])

  const handleAddCar = (img: string, title: string, price: string, id: number) => {
    const ItemCarrinho = carrinho.find((carrinho:any) => carrinho.id === id)
    if(ItemCarrinho){
      return
    }
    const newCarrinho = [
        ...carrinho,
        {
          img: img,
          title: title,
          price: price,
          id: id,
          quantidade: quant,
        },
      ];
    setCarrinho(newCarrinho)
  }
  const handleAddMoreQuant = (value:string) => {
    if(value == 'More'){
      setQuant(quant + 1)
    } else {
      if(quant === 1){
        return
      }
      setQuant(quant - 1)

    }
  }

return (
  <>
    <main>
      <div className='md:flex gap-3 justify-between items-start' >
        <Img setCurrentImg={setCurrentImg} currentImg={currentImg} />
        <div className="md:w-[35%] md:h-[618px] md:bg-[#1A1A1A] my-5 rounded-xl md:p-10 py-5">

          <div className='md:hidden flex justify-start gap-4 mb-9' >
            <Imgs_lados currentImg={currentImg} setCurrentImg={setCurrentImg} />
          </div>

          <div className='flex flex-col justify-center items-start gap-2' >
            <div className='text-[#A1A1A1] flex items-center gap-2 md:text-sm' >
              <h1 className='capitalize' >{productsSingle.newOrOld}</h1>
              <h1>|</h1>
              <h1>{productsSingle.quantidade} Disponivel</h1>
            </div>

            <div className='text-[#ffff] flex items-center gap-2 md:text-[22px] text-lg' >
              <h1 className='capitalize' >{productsSingle.title}</h1>
            </div>

            <div className='text-[#8162FF] flex items-center gap-2 md:text-sm text-xs' >
              <h1 className='capitalize' >Disponível em Estoque</h1>
            </div>

            <div className="flex items-center text-[#8162FF] gap-2">
              <div className='flex items-center' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <span className='text-xs relative top-[2px] text-[#A1A1A1]' >(25 avaliações)</span>
            </div>
          </div>

          <div className="my-5 space-y-3">
            <div>
              <h1 className='text-[#ffff] font-extrabold md:text-3xl text-[22px]' >{productsSingle.price}</h1>
              <h1 className='text-[#A1A1A1] font-extrabold md:text-base text-sm line-through' >De: {productsSingle.oldPrice}</h1>
            </div>

            <div className='flex items-center gap-2' >
              <button className='border-2 border-[#2A2A2A] text-white p-2 rounded-md hover:scale-105 duration-200' onClick={()=>handleAddMoreQuant('AnyLess')}><h1><FaArrowLeft /></h1></button>
              <div className='text-white p-2 text-sm md:text-base' ><h1>{quant}</h1></div>
              <button className='border-2 border-[#2A2A2A] text-white p-2 rounded-md hover:scale-105 duration-200' onClick={()=>handleAddMoreQuant('More')}><h1><FaArrowRight /></h1></button>
            </div>
          </div>

          <div className="my-5 space-y-1">
            <h1 className='text-[#ffff] font-bold md:text-base text-sm'>Descriçao</h1>
            <h1 className='text-[#A1A1A1] text-xs md:text-sm'>{productsSingle.description}</h1>
          </div>

          <div
            className='text-center text-sm md:text-base font-extrabold mt-5 p-2 bg-[#5033C3] rounded-xl text-[#ffff] hover:scale-[1.02] duration-200 cursor-pointer'
            onClick={() => handleAddCar(productsSingle.img, productsSingle.title, productsSingle.price, productsSingle.id)}>
            <button>ADICIONAR AO CARRINHO</button>
          </div>

          <div className='my-5 mt-3 flex items-center justify-between text-[#ffff] bg-[#2A2A2A] px-2 py-[11px] rounded-xl' >
            <div className='flex items-center gap-3' >
              <span><CiDeliveryTruck size={35} /></span>
              <div>
                <h1 className='md:text-sm text-xs'>Entrega via <span>IgorExpress</span></h1>
                <h1 className='md:text-xs text-[11px] text-[#8162FF]'>Envio para <span className='font-extrabold' >Todo Brasil</span></h1>
              </div>
            </div>
            <h1 className='text-xs md:text-[11px]' >Frete Grátis</h1>
          </div>

        </div>
      </div>

      <div className="my-5 pb-10 text-[#ffff]">
        <div>
          <h1 className="md:text-lg text-base uppercase font-bold pl-1">Produtos Recomendados</h1>
        </div>
        <div className='flex justify-start items-center gap-4 overflow-x-auto scrollbar-hide my-3' >
          {Products
            .filter(Products => Products.type == `${productsSingle.type}`)
            .filter(Products => Products.id != productsSingle.id)
            .slice(0, 9)
            .map((info) => (
              <div key={info.id}>
                <InfoProductsSingle info={info} />
              </div>
            ))}
        </div>
      </div>
    </main>
  </>
)
}

export default Products_Single