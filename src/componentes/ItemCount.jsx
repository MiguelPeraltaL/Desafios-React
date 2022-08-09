import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const ItemCount = ({stock}) => {

    const [clickCount, setClickCount] = useState(0);
    const [cantidad, setCantidad] = useState(stock);
    const [habilitar, setHabilitar] = useState(false);

    const contar = () => {
        clickCount < cantidad ? 
        setClickCount(clickCount + 1) :
        console.log("No hay más stock")
    }
    const descontar = () => {
        clickCount > 0 ?
        setClickCount(clickCount - 1) :
        console.log("Cero productos para agregar")
    }
    const agregar = () => {
        if (clickCount > 0){
            setCantidad(cantidad - clickCount)
            setClickCount(clickCount * 0)
            setHabilitar(true)}
        else{
            console.log("Cantidad debe ser mayor que 0")
        }
    }

  return (
    <div>
        <p>Stock Producto {cantidad}</p>
        <button className='bg-gray-500 p-2 rounded' onClick={descontar}> - </button>
        <label> {clickCount} </label>
        <button className='bg-gray-500 p-2 rounded' onClick={contar}> + </button>
        <button className='bg-gray-500 p-2 rounded m-2' onClick={agregar}> Agregar al carrito </button>
        {
            habilitar ? 
            <Link to={'/carrito'}><button className='bg-gray-500 p-2 rounded'> Comprar </button></Link> : 
            <></>
        }
    </div>
  )
}

export default ItemCount