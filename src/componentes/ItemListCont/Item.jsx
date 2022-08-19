import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Item = ({id, categoria, marca, modelo, precio, stock}) => {

  const [url,setUrl]=useState('/detalle/')

  useEffect(()=>{
    const asignarValor = ()=>{
      return new Promise((resolve,reject)=>{
        let newUrl = url + id
        resolve(newUrl)
      })
    }
    asignarValor()
    .then((result)=>{
      setUrl(result)
    })
  },[])

  return (
    <div>
        <div className='w-1/4 bg-gray-200 m-2 p-2 rounded'>
          <div>Categoria: {categoria} </div>
          <div>Marca: {marca} </div>
          <div>Modelo: {modelo} </div>
          <div>Precio: {precio} </div>
          <div><button className='bg-gray-500 p-2 rounded'><Link to={url}>Ver detalle</Link></button></div>
        </div>
    </div>
  )
}

export default Item