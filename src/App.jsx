import './App.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListCont/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideBar from './componentes/SideBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='flex'>
          {/* <SideBar /> */}
          <div className='w-full'>
            <NavBar />
          </div>
        </div>
        <Routes>
          <Route path='/' element={<p>Home</p>}/>
          <Route path='/productos' element={<ItemListContainer />}/>
          <Route path='/nosotros' element={<p>Nosotros</p>}/>
          <Route path='/carrito' element={<p>Carrito</p>}/>
          <Route path='/detalle/:idProd' element={<ItemDetailContainer />}/>
          <Route path='*' element={<p>Error 404</p>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
