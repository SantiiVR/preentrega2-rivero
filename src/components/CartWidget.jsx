import React, { useContext, useEffect, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { qty, productList } = useContext(CartContext)
  const [isOpen, setIsOpen]=useState(false)
  


  return (
<div>
<div className='py-2 px-4 border border-gray-500 rounded-xl relative' onClick={() => setIsOpen(!isOpen) }>
      <FaCartShopping size={25} color='#fff' />
      <span className='rounded-full bg-green-700 px-1 text-xs text-gray-300 font-bold absolute right-0.5 bottom-0.5'>
        {qty > 0 ? qty : ""}
      </span>
    </div>
      {isOpen&&(
        <div className='bg-slate-700 w-80 absolute top-15 right-38 px-2 py-2 flex flex-col'>
        {productList.map((p) => (
          <div className=' rounded-t-md border-b-2 border-white text-white font-bold pt-1 flex justify-around'>
          <span>{p.name} </span>
          <span>X {p.qty} </span>
          <span>$ {p.qty * p.price} </span>
        </div>
        )
        )}
        <div className='text-white font-bold text-center py-2 flex flex-col justify-center'>
          <span className='text-center text-blue-300'>TOTAL ${productList.reduce((acc,p) => {
            return acc+(p.qty*p.price)
          },0)} </span>
          <Link to={"/checkout"} className='py-1 px-2 rounded-xl bg-green-900 text-white mt-2'>Finalizar Compra</Link>
        </div>
      </div>
      )}
    </div>
  )
}

export default CartWidget;
