import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import logo from '../imagenes/logoreact1.png'

const NavBar = () => {
  return (
    <div className='flex bg-black text-white h-20 w-full p-4'>
        <Link to={'/'} className='p-5'><img src={logo} alt="Logo" width={30} /></Link>
        <Link to={'/'} className='p-5'>Inicio</Link>
        <Link to={'/productos'} className='p-5'>Productos</Link>
        <Link to={'/nosotros'} className='p-5'>Nosotros</Link>
        <Link to={'/carrito'} className='flex'><CartWidget /></Link>
    </div>
  )
}

export default NavBar