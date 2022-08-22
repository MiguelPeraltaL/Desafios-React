import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { myContext } from '../HOCContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  
  const { prod, setProd } = useContext(myContext)
  const {id} = useParams()
  
  useEffect(()=>{
    const db = getFirestore()
    const refADoc = doc(db, 'productos', id)
    getDoc(refADoc).then((res) => {
      const objetoBienFormado = [{ id: res.id, ...res.data() }]
      setProd(objetoBienFormado)
    })
  },[])

  return (
    <div>
      <h1>Detalle del producto</h1>
      {
        prod.map((producto)=>
            <ItemDetail id={producto.id} categoria={producto.categoria} marca={producto.marca} modelo={producto.modelo} precio={producto.precio} stock={producto.stock}/>
        )
      }
    </div>
  )
}

export default ItemDetailContainer