import React, { useContext } from 'react'
import PurchaseForm from '../components/PurchaseForm'
import Summary from '../components/Summary'
import { CartContext } from '../context/CartContext'
import { nanoid } from "nanoid";
import { saveOrder } from '../api/apiProducts';
import { useNavigate } from 'react-router-dom';
import { deleteProducts } from '../utils/productManager';

/*TODO:
incluir dormulario de registro (controlado con formik yup
agregar resumen de compra del cart context
agregar la compra y el usuario a la base de datos
redirigir al brief
 */
const Checkout = () => {

  const navegate=useNavigate()
  const { productList, setProductList, setqty}=useContext(CartContext)
  async function handleSubmit(value) {
      try {
        const order={
          id:nanoid(),
          client:{...value},
          products:[...productList],
          total:productList.reduce((acc,p) => {
            return acc+(p.qty*p.price)
          },0)
        }
        saveOrder(order)
        deleteProducts()
        setProductList([])
        setqty(0)
        
        navegate(`/brief/${order.id}`)
      } catch (error) {}
    }

  return (
    <div className='flex justify-evenly pt-20 bg-slate-800 h-screen'>
      <div className='dark:bg-gray-800 dark:border-gray-600 rounded-xl w-2/5 p-6 text-gray-400'>
        <h1 className='font-black text-2xl py-2'>Registro</h1>
        <PurchaseForm handleSubmit={handleSubmit}/>
        </div>
      <div className='dark:bg-gray-800 dark:border-gray-600 text-gray-400 w-2/5'>
      <h2 className='flex justify-center py-2 text-3xl border-b-2 text-gray-400 font-black'>Resumen de compra</h2>
        <Summary productList={productList}/>
      </div>
    </div>
  )
}

export default Checkout