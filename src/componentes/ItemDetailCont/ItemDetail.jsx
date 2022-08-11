import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({idProd, categoria, marca, modelo, precio, stock}) => {
  return (
    <div className='bg-gray-200 m-2 p-2 w-2/4 rounded'>
      <p>Sku: {idProd} </p>
      <p>Categoria: {categoria} </p>
      <p>Marca: {marca} </p>
      <p>Modelo: {modelo} </p>
      <p>Precio: {precio} </p>
      <ItemCount stock={stock} idProd={idProd}/>
    </div>
  )
}

export default ItemDetail