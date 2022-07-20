import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer />
  </React.StrictMode>
)