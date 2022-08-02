import React from 'react'
import logo from '../imagenes/logoreact1.png'

const SideBar = () => {
  return (
    <div className='bg-black text-white h-screen w-40'>
        <div className='m-2 p-4 pl-6 pt-6 w-20'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='m-4 p-4'>
            <div>Inicio</div>
            <div>Buscar</div>
            <div>Categorias</div>
        </div>
    </div>
  )
}

export default SideBar