import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardDetailComponent from '../components/CardDetailComponent'
import { getProductsById } from '../api/apiProducts'



const ItemDetailContainer = () => {
  const {id}=useParams()

  const [product, setProduct] = useState ({} )
  const fillProduct = async () => {
    try { 
      setProduct (await getProductsById(id)) 
      
    } catch (error) { 
      console.log(error)
      
    }
  }

useEffect(() => { 
  fillProduct()


},[])


  return (
    <CardDetailComponent product={product} />
  )
}

export default ItemDetailContainer