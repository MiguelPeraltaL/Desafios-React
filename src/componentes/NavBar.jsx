import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
        <button className='NavBar__Button'>Inicio</button>
        <button className='NavBar__Button'>Productos</button>
        <button className='NavBar__Button'>Nosotros</button>
        <button className='NavBar__Button'><CartWidget /></button>
    </div>
  )
}

export default NavBar