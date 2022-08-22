import React from 'react'
import { useState, useEffect, useContext } from 'react'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  
  const [product,setProduct]=useState([])
  
  useEffect(()=>{
    const db = getFirestore()
    const refCollectionProductos = collection(db, 'productos')
    getDocs(refCollectionProductos).then((res) => {
      let coleccion = res.docs
      coleccion = coleccion.map((producto) => {
        const productoBienFormado = { id: producto.id, ...producto.data() }
        return productoBienFormado
      })
      setProduct(coleccion)
    })
  },[])

  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemList products={product}/>
    </div>
  )
}

export default ItemListContainer