import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({idProd, categoria, marca, modelo, precio, stock}) => {
  return (
    <div className='bg-gray-200 m-2 p-2 w-1/3 rounded'>
      <div>Sku: {idProd} </div>
      <div>Categoria: {categoria} </div>
      <div>Marca: {marca} </div>
      <div>Modelo: {modelo} </div>
      <div>Precio: {precio} </div>
      {/* <div>Stock: {stock} </div> */}
      <ItemCount stock={stock}/>
    </div>
  )
}

export default ItemDetail