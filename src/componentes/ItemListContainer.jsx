import React from 'react'
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount'
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  const [product,setProduct]=useState([])
  
  useEffect(()=>{

    const imprimirProductos = ()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const prod = [
            {
              id:"1",
              categoria:"Deportivo" ,
              marca: "Porshe",
              modelo: "911"
            },
            {
              id:"2",
              categoria:"Todo terreno" ,
              marca: "Suzuki",
              modelo: "Jimny"
            },
            {  
              id:"3",  
              categoria:"Citycar" ,
              marca: "suzuki",
              modelo: "Alto"
            },
            {
              id:"4",
              categoria:"Deportivo" ,
              marca: "Lamborghini",
              modelo: "Murcielago"
            },
            { 
              id:"5",
              categoria:"Hatchback" ,
              marca: "Volkswagen",
              modelo: "Golf"
            }]
            
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
      <ItemCount stock="8"/>
    </div>
  )
}

export default ItemListContainer