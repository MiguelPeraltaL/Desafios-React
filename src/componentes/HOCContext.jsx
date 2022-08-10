import React from 'react'
import { createContext, useEffect, useState } from 'react';
export const myContext = createContext();

export default function HOCContext({ children }) {
    const [product,setProduct]=useState([])
    const [arregloCarro,setArregloCarro]=useState([])

  useEffect(() => {

    const prod = [
        {idProd:1,categoria:"Deportivo",marca:"Porshe",modelo:"911",precio:1000,stock:5},
        {idProd:2,categoria:"Todo terreno",marca:"Suzuki",modelo:"Jimny",precio:120,stock:10},
        {idProd:3,categoria:"Citycar",marca:"suzuki",modelo:"Alto",precio:60,stock:12},
        {idProd:4,categoria:"Deportivo",marca:"Lamborghini",modelo:"Murcielago",precio:1200,stock:4},
        {idProd:5,categoria:"Hatchback",marca:"Volkswagen",modelo:"Golf",precio:190,stock:8}
      ]
    setProduct(prod)

  }, [])
  
  return (
    <div>
        <myContext.Provider value={{ product, setProduct, arregloCarro, setArregloCarro }}>{children}</myContext.Provider>
    </div>
  )
}
