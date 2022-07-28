import React from 'react'

const Item = ({id, categoria, marca, modelo}) => {
  return (
    <div>
        <div>Sku: {id} </div>
        <div>Categoria: {categoria} </div>
        <div>Marca: {marca} </div>
        <div>Modelo: {modelo} </div>
    </div>
  )
}

export default Item