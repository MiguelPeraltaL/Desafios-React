import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { myContext } from '../HOCContext'

const ItemDetailContainer = () => {
  
  const [prod,setProd]=useState([])
  const { product, setProduct } = useContext(myContext)
  const {idProd} = useParams()
  
  useEffect(()=>{

    const imprimir = ()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(idProd){
            resolve(product.filter(producto=> producto.idProd == idProd))
          }else{
            reject("Producto no disponible")
          }
        },1000)
      })
    }
    
    imprimir()
    .then((result)=>{
      setProd(result)
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
        prod.map((producto)=>
            <ItemDetail idProd={producto.idProd} categoria={producto.categoria} marca={producto.marca} modelo={producto.modelo} precio={producto.precio} stock={producto.stock}/>
        )
      }
    </div>
  )
}

export default ItemDetailContainer