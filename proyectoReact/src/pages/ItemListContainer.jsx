import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../utils/asyncProducts'
import CardGallery from '../components/CardGallery'

const ItemListContainer = () => {

  const {id}= useParams()
  
  const [products, setProducts] = useState ([])
  const fillProducts = async () => {
    try { 
      if ( !id  ) {

        setProducts(await getProducts()) 
      } else {
        setProducts (await getProductsByCategory(id) ) 
      }
      
    } catch (error) { 
      console.log(error)
      
    }
  }

useEffect(() => { 
  fillProducts()


},[products])

  return (
    <div className='bg-gray-500'>
      <h1 className='text-center text-4xl py-20 text-white'>Catalogo</h1>
      <CardGallery products={products} />
    </div>
  )
}

export default ItemListContainer