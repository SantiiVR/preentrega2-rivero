import { useContext, useState } from 'react'
import ItemQuantitySelector from './ItemQuantitySelector'
import AddItemButton from './AddItemButton'
import { saveProduct } from '../utils/productManager'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CardDetailComponent = ({ product }) => {
  const [counter, setCounter] = useState(1)
  const { productList, setProductList, setqty } = useContext(CartContext)

  const addProduct = () => {
    if (!product || product.stock <= 0) return;

    const productSave = { id: product.id, name: product.name, price: product.price, qty: counter }
    saveProduct(productSave)

    const updatedProductList = [
      ...productList.filter(p => p.id !== productSave.id), 
      productSave
    ]
    setProductList(updatedProductList)

    const total = updatedProductList.reduce((acc, product) => acc + product.qty, 0);
    setqty(total)
  }

  return (
    product ? (
      <div className="w-9/10 my-10 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className='flex justify-around items-center'>
          <div className='flex justify-center items-center w-2/5 h-full'>
            <img className="h-full object-contain" width={300} src={product?.img} alt={product?.name} />
          </div>
          <div className='w-3/5 px-20 py-10'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name} </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.descrip} </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Precio: ${product.price} </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stock: {product.stock} unidades</p>
  
            {}
            <ItemQuantitySelector count={counter} setCount={setCounter} stock={product.stock} />
            <AddItemButton save={addProduct} />
            <Link to={"/checkout"} className='py-1 px-2 rounded-xl bg-green-900 text-white mt-2'>Finalizar Compra</Link>
          </div>
        </div>
      </div>
    ) : (
      <div>Cargando...</div> 
    )
  )
}

export default CardDetailComponent

