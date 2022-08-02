import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  const [product,setProduct]=useState([])
  
  useEffect(()=>{

    const imprimirProductos = ()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const prod = [
            {idProd:1,categoria:"Deportivo",marca:"Porshe",modelo:"911",precio:1000,stock:5},
            {idProd:2,categoria:"Todo terreno",marca:"Suzuki",modelo:"Jimny",precio:120,stock:10},
            {idProd:3,categoria:"Citycar",marca:"suzuki",modelo:"Alto",precio:60,stock:12},
            {idProd:4,categoria:"Deportivo",marca:"Lamborghini",modelo:"Murcielago",precio:1200,stock:4},
            {idProd:5,categoria:"Hatchback",marca:"Volkswagen",modelo:"Golf",precio:190,stock:8}
          ]
            
          if(prod.length === 0){
            reject("No hay productos disponibles")
          }else{
            resolve(prod)
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