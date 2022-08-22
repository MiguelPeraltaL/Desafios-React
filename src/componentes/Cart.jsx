import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { myContext } from './HOCContext'
import { Link } from 'react-router-dom'
import { collectionGroup } from 'firebase/firestore'
import { doc, getDoc, addDoc, collection, updateDoc, getFirestore } from 'firebase/firestore'

export default function Cart() {
  const { product, setProduct, arregloCarro, setArregloCarro } = useContext(myContext)
  const [total, setTotal] = useState(0)
  const [habilitar, setHabilitar] = useState(false)
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [idOrder, setIdOrder] = useState('')

    useEffect(() => {
      let acumulado = 0
      arregloCarro.forEach(p => {
          acumulado = acumulado + (p.stock*p.precio)
      })
      setTotal(acumulado)
    }, [arregloCarro])

  const borrar = (id, num) => {
    if(num>0){
      if(num==1){
        const arregloByPass2 = arregloCarro.filter(producto=> producto.id !== id)
        setArregloCarro(arregloByPass2)
      }
      else{
        const arregloByPass2 = arregloCarro.map(p =>
          p.id == id
          ? { ...p, stock: p.stock - 1 }
          : p
        )
        setArregloCarro(arregloByPass2)
      }

      const db = getFirestore()
      const refADoc = doc(db, 'productos', id)
      getDoc(refADoc).then((res) => {
        const objetoBienFormado = [{ id: res.id, ...res.data() }]
        let objeto = objetoBienFormado.find(p => p.id==id)
        const upDoc = doc(db, 'productos', id)
        updateDoc(upDoc, {stock: objeto.stock + 1})
      })
      // const db = getFirestore()
      // const upDoc = doc(db, 'productos', id)
      // updateDoc(upDoc, {stock: stockObjeto + 1})
    }
  }

  const comprar = () => {
    setHabilitar(true)
  }

  const borrarTodo = () => {
    arregloCarro.forEach(p => {
      let idProd = p.id
      let valorStock = p.stock
      const db = getFirestore()
      const refADoc = doc(db, 'productos', idProd)
      getDoc(refADoc).then((res) => {
        const objetoBienFormado = [{ id: res.id, ...res.data() }]
        let objeto = objetoBienFormado.find(p => p.id==idProd)
        const upDoc = doc(db, 'productos', idProd)
        updateDoc(upDoc, {stock: objeto.stock + valorStock})
      })
    })
    setArregloCarro([])
  }

  const terminarCompra = () => {
    const orden = {
      buyer: { name, tel, email },
      items: [...arregloCarro],
      total: {total},
    }
    const db = getFirestore()
    const refCollection = collection(db, 'ordencompra')
    addDoc(refCollection, orden).then((res) => {
      setIdOrder(res.id);
      setArregloCarro([])
      setHabilitar(false)
    })
  }

  const cancelarCompra = () => {
    setHabilitar(false)
  }
  
  return (
    <div>
      <h1>Detalle Carrito</h1>
      {
        !habilitar &&
        arregloCarro.map((producto)=>
          <div className='bg-gray-200 m-2 p-2 w-2/4 rounded'>
            <p>Sku: {producto.id}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Marca: {producto.marca}</p>
            <p>Modelo: {producto.modelo}</p>
            <p>Cantidad: {producto.stock}</p>
            <p>Precio: {producto.precio}</p>
            <button className='bg-gray-500 p-2 rounded m-2' onClick={() => borrar(producto.id, producto.stock)}> Borrar </button>
          </div>
        )
      }
      {
        !habilitar &&
        (arregloCarro.length > 0 ?
          (<div>
            <p>Total:________________________{total}<button className='bg-gray-500 p-2 rounded m-2' onClick={comprar}>Comprar</button></p>
            <button className='bg-gray-500 p-2 rounded m-2' onClick={borrarTodo}>Borrar todo</button>
          </div>) :
          idOrder == '' ?
          <Link to={'/productos'}>Carrito vacio, ver Productos</Link> : <p>Id de tu compra: {idOrder}</p>
          )
      }
      {
        habilitar &&
        (<div>
          <input type={'text'} className='border-2' placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <input type={'tel'} className='border-2' placeholder="celular" value={tel} onChange={(e) => setTel(e.target.value)} />
          <br />
          <input type={'email'} className='border-2' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <button className='bg-gray-500 p-2 rounded m-2' onClick={terminarCompra}>Finalizar compra</button>
          <button className='bg-gray-500 p-2 rounded m-2' onClick={cancelarCompra}>Cancelar compra</button>
        </div>)
      }
    </div>
  )
}
