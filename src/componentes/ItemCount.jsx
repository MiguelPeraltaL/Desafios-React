import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from './HOCContext'
import { doc, updateDoc, getFirestore } from 'firebase/firestore'

const ItemCount = ({id}) => {

    const [clickCount, setClickCount] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [habilitar, setHabilitar] = useState(false);
    const { prod, setProd, arregloCarro, setArregloCarro } = useContext(myContext)

    useEffect(() => {
        let cantidad2 = prod.find(p => p.id==id)
        setCantidad(cantidad2.stock)
    }, [prod])

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
            setHabilitar(true)

            if(arregloCarro.some(p => p.id == id)){
                const arregloByPass2 = arregloCarro.map(p =>
                    p.id == id
                    ? { ...p, stock: p.stock + clickCount }
                    : p
                )
                setArregloCarro(arregloByPass2)
            }
            else{
                const arregloByPass2 = prod.map(p =>
                    p.id == id
                    ? { ...p, stock: clickCount }
                    : p
                )
                setArregloCarro(arregloCarro.concat(arregloByPass2))
            }
            
            const db = getFirestore()
            const upDoc = doc(db, 'productos', id)
            updateDoc(upDoc, {stock: cantidad - clickCount})
            
            setClickCount(clickCount * 0)
        }
        else{
            console.log("Cantidad debe ser mayor que 0")
        }
    }

  return (
    <div>
        <p>Stock Producto {cantidad}</p>
        <div className='flex'>
        <button className='bg-gray-500 p-2 rounded m-2' onClick={descontar}> - </button>
        <p> {clickCount} </p>
        <button className='bg-gray-500 p-2 rounded m-2' onClick={contar}> + </button>
        <button className='bg-gray-500 p-2 rounded m-2' onClick={agregar}> Agregar al carrito </button>
        {
            habilitar && 
            <Link to={'/carrito'}><button className='bg-gray-500 p-2 rounded m-2'> Comprar </button></Link>
        }
    </div>
    </div>
  )
}

export default ItemCount