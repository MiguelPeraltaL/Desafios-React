import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div>
        {
            products.map((producto)=>
                <Item id={producto.id} categoria={producto.categoria} marca={producto.marca} modelo={producto.modelo}/>
            )
        }
    </div>
  )
}

export default ItemList