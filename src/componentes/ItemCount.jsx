import React from 'react'
import { useState } from 'react';

const ItemCount = ({stock}) => {

    const [clickCount, setClickCount] = useState(0);
    const [cantidad, setCantidad] = useState(stock);

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
            setClickCount(clickCount * 0)}
        else{
            console.log("Cantidad debe ser mayor que 0")
        }
    }

  return (
    <div>
        <p>Stock Producto {cantidad}</p>
        <button onClick={descontar}> - </button>
        <label> {clickCount} </label>
        <button onClick={contar}> + </button>
        <button onClick={agregar}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount