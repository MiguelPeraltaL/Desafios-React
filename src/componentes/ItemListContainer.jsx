import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
  return (
    <div>
        <h1>Listado de productos</h1>
        <ItemCount stock="8"/>
    </div>
  )
}

export default ItemListContainer