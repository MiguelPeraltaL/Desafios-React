import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({id, categoria, marca, modelo, precio, stock}) => {
  return (
    <div className='bg-gray-200 m-2 p-2 w-2/4 rounded'>
      <p>Sku: {id} </p>
      <p>Categoria: {categoria} </p>
      <p>Marca: {marca} </p>
      <p>Modelo: {modelo} </p>
      <p>Precio: {precio} </p>
      <ItemCount id={id}/>
    </div>
  )
}

export default ItemDetail