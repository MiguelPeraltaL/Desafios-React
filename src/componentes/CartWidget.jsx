import React from 'react'
import carro from '../imagenes/cart.png'
import { useState, useEffect, useContext } from 'react'
import { myContext } from './HOCContext'

const CartWidget = () => {
  const { product, setProduct, arregloCarro, setArregloCarro } = useContext(myContext)
  const [cantidad, setCantidad] = useState(0)

  useEffect(() => {
    setCantidad(arregloCarro.length)
  }, [arregloCarro])

  return (
    <>
      <img src={carro} alt="Cart" />{cantidad > 0 && <p>{cantidad}</p>}
    </>
  )
}

export default CartWidget