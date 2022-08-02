import React from 'react'

const ItemDetail = ({idProd, categoria, marca, modelo, precio, stock}) => {
  return (
    <div>
      <div>Sku: {idProd} </div>
      <div>Categoria: {categoria} </div>
      <div>Marca: {marca} </div>
      <div>Modelo: {modelo} </div>
      <div>Precio: {precio} </div>
      <div>Stock: {stock} </div>
      
      
    </div>
  )
}

export default ItemDetail