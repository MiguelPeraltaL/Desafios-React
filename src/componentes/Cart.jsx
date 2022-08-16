import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { myContext } from './HOCContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { product, setProduct, arregloCarro, setArregloCarro } = useContext(myContext)
  const [total, setTotal] = useState(0)

    useEffect(() => {
      let acumulado = 0
      arregloCarro.forEach(p => {
          acumulado = acumulado + (p.stock*p.precio)
          console.log(acumulado)
      })
      setTotal(acumulado)
    }, [arregloCarro])

  const borrar = (id, num) => {
    if(num>0){
      if(num==1){
        const arregloByPass2 = arregloCarro.filter(producto=> producto.idProd !== id)
        setArregloCarro(arregloByPass2)
        console.log(arregloByPass2)
      }
      else{
        const arregloByPass2 = arregloCarro.map(p =>
          p.idProd == id
          ? { ...p, stock: p.stock - 1 }
          : p
        )
        setArregloCarro(arregloByPass2)
        console.log(arregloByPass2)
      }
      const arregloByPass = product.map(p =>
        p.idProd == id
        ? { ...p, stock: p.stock + 1 }
        : p
      )
      setProduct(arregloByPass)
      console.log(arregloByPass)
    }
  }
  
  return (
    <div>
      <h1>Detalle Carrito</h1>
      {
        arregloCarro.map((producto)=>
          <div className='bg-gray-200 m-2 p-2 w-2/4 rounded'>
            <p>Sku: {producto.idProd}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Marca: {producto.marca}</p>
            <p>Modelo: {producto.modelo}</p>
            <p>Cantidad: {producto.stock}</p>
            <p>Precio: {producto.precio}</p>
            <button className='bg-gray-500 p-2 rounded m-2' onClick={() => borrar(producto.idProd, producto.stock)}> Borrar </button>
          </div>
        )
      }
      {
        arregloCarro.length > 0 ? (<p>Total:________________________{total}</p>) :
        <Link to={'/productos'}>Carrito vacio, ver Productos</Link>
      }      
    </div>
  )
}
