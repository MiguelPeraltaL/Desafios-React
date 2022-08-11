import React from 'react'
import { useState, useEffect, useContext } from 'react'
import ItemList from './ItemList'
import { myContext } from '../HOCContext'

const ItemListContainer = () => {
  
  const { product, setProduct } = useContext(myContext)
  
  useEffect(()=>{

    const imprimirProductos = ()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        
          if(product.length === 0){
            reject("No hay productos disponibles")
          }else{
            resolve(product)
          }
        },2000)
      })
    }
    
    imprimirProductos()
    .then((result)=>{
      setProduct(result)
    })
    .catch((error)=>{
      console.log("Hay un error con los productos :" + error)
    })
    .finally(()=>{
      console.log("Termino la consulta de productos")
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