import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  
  const [product,setProduct]=useState([])
  const {idProd} = useParams()
  
  useEffect(()=>{

    const prod = [
      {idProd:1,categoria:"Deportivo",marca:"Porshe",modelo:"911",precio:1000,stock:5},
      {idProd:2,categoria:"Todo terreno",marca:"Suzuki",modelo:"Jimny",precio:120,stock:10},
      {idProd:3,categoria:"Citycar",marca:"suzuki",modelo:"Alto",precio:60,stock:12},
      {idProd:4,categoria:"Deportivo",marca:"Lamborghini",modelo:"Murcielago",precio:1200,stock:4},
      {idProd:5,categoria:"Hatchback",marca:"Volkswagen",modelo:"Golf",precio:190,stock:8}
    ]

    const imprimir = ()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(idProd){
            resolve(prod.filter(producto=> producto.idProd == idProd))
          }else{
            reject("Producto no disponible")
          }
        },2000)
      })
    }
    
    imprimir()
    .then((result)=>{
      setProduct(result)
    })
    .catch((error)=>{
      console.log("Hay un error con el producto:" + error)
    })
    .finally(()=>{
      console.log("Termino la consulta de producto")
    })
  },[])

  return (
    <div>
      <h1>Detalle del producto</h1>
      {
        product.map((producto)=>
            <ItemDetail idProd={producto.idProd} categoria={producto.categoria} marca={producto.marca} modelo={producto.modelo} precio={producto.precio} stock={producto.stock}/>
        )
      }
    </div>
  )
}

export default ItemDetailContainer