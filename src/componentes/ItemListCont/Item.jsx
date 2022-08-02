import React from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Item = ({idProd, categoria, marca, modelo, precio, stock}) => {

  const [url,setUrl]=useState('/detalle/')

  useEffect(()=>{
    const asignarValor = ()=>{
      return new Promise((resolve,reject)=>{
        let newUrl = url + idProd
        resolve(newUrl)
      })
    }
    asignarValor()
    .then((result)=>{
      setUrl(result)
    })
  },[])

  return (
    <div className='flex'>
        <div>Sku: {idProd} </div>
        <div>Categoria: {categoria} </div>
        <div>Marca: {marca} </div>
        <div>Modelo: {modelo} </div>
        <div>Precio: {precio} </div>
        <div><button><Link to={url}>Ver detalle</Link></button></div>
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Item