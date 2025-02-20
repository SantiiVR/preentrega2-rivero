import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllProducts, getProductsByCategory } from '../api/apiProducts'
import CardGallery from '../components/CardGallery'

const ItemListContainer = () => {
  const { id } = useParams()

  const [products, setProducts] = useState([])

  const fillProducts = async () => {
    try {
      if (!id) {
        // Si no hay 'id' (sin categoría), obtener todos los productos
        setProducts(await getAllProducts())
      } else {
        // Si hay 'id', obtener productos por categoría
        setProducts(await getProductsByCategory(id))
      }
    } catch (error) {
      console.log(error)
    }
  }

  // UseEffect solo se ejecutará cuando 'id' cambie
  useEffect(() => {
    fillProducts()
  }, [id])  // Ahora depende solo de 'id', no de 'products'

  return (
    <div className="bg-gray-500">
      <h1 className="text-center text-4xl py-20 text-white">Catálogo</h1>
      {/* Verifica que 'products' no esté vacío antes de renderizar */}
      {products.length > 0 ? (
        <CardGallery products={products} />
      ) : (
        <div>Cargando...</div>  // Mostrar un mensaje de carga si no hay productos
      )}
    </div>
  )
}

export default ItemListContainer
