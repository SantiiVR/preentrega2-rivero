import React from 'react'
import {Route, Routes} from "react-router-dom"
import ItemListContainer from './pages/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './pages/ItemDetailContainer'


const App = () => {
  return (
    <div>
      <NavBar/>
    <Routes>
      
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categoria/:id' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />

    </Routes>
    </div>
  )
}

export default App