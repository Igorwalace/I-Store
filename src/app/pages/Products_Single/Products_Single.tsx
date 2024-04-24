'use client'
import useAppContext from '@/context/page'
import React from 'react'

const Products_Single = () => {

  const { setProductsSingle, productsSingle } = useAppContext()

  return (
    <>
    <div className='text-white' >okok</div>
      {productsSingle.map((info:any)=>(
        <div key={info.id} className='text-white' >
          <h1>Title: {info.title}</h1>
        </div>
      ))}
    </>
  )
}

export default Products_Single