import React from 'react'
import {Route, Routes} from "react-router-dom"
import ItemListContainer from './pages/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './pages/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Checkout from "./pages/Checkout"
import Brief from './pages/Brief'


const App = () => {
  return (
    <div>
      <CartProvider>
      <NavBar/>
    <Routes>

      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categoria/:id' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/brief/:id' element={<Brief/>} />
    </Routes>
      </CartProvider>
    </div>
  )
}

export default App