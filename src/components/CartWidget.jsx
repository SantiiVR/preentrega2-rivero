import React, { useContext, useEffect, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { qty } = useContext(CartContext)
  


  return (
    <div className='py-2 px-4 border border-gray-500 rounded-xl relative'>
      <FaCartShopping size={25} color='#fff' />
      <span className='rounded-full bg-green-700 px-1 text-xs text-gray-300 font-bold absolute right-0.5 bottom-0.5'>
        {qty > 0 ? qty : ""}
      </span>
    </div>
  )
}

export default CartWidget;
