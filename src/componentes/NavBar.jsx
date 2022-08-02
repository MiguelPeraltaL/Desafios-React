import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import logo from '../imagenes/logoreact1.png'

const NavBar = () => {
  return (
    <div className='flex bg-black text-white h-20 w-full p-4'>
        <Link to={'/'}><img src={logo} alt="Logo" width={30} /></Link>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/productos'}>Productos</Link>
        <Link to={'/nosotros'}>Nosotros</Link>
        <Link to={'/carrito'}><CartWidget /></Link>
    </div>
  )
}

export default NavBar