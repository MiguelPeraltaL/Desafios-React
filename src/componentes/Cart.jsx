import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { myContext } from './HOCContext'

export default function Cart() {
  const { product, setProduct, arregloCarro, setArregloCarro } = useContext(myContext)
  return (
    <div>
      <h1>Detalle Carrito</h1>
      {
        arregloCarro.map((producto)=>
        <div className='bg-gray-200 m-2 p-2 w-2/4 rounded'>
          <p>Sku: {producto.idProd}</p>
          <p>Categoria: {producto.categoria}</p>
          <p>Marca: {producto.marca}</p>
          <p>Modelo: {producto.modelo}</p>
          <p>Cantidad: {producto.stock}</p>
          <p>Precio: {producto.precio}</p>
        </div>
        )
      }
    </div>
  )
}
