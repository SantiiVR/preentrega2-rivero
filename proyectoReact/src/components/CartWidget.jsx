import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
  return (
    <div className='py-2 px-4 border border-gray-500 rounded-xl relative' >
      <FaCartShopping size={25} color='#fff' />
      <span className='rounded-full bg-green-700 px-1 text-xs text-gray-300 font-bold absolute right-0.5 bottom-0.5'>3</span>
    </div>
  )
}

export default CartWidget