import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { getProducts } from '../utils/productManager'


export const CartContext=createContext()

export const CartProvider = ({children}) => {
    const [productList , setProductList] = useState(getProducts())
      const [qty, setqty] = useState(0)
    useEffect(() => {
        
        const total = productList.reduce((acc, product) => acc + (product.qty || 0), 0);
        setqty(total)
      }, [qty]) 
    return (
        <CartContext.Provider value={{productList , setProductList, qty, setqty}}>
            {children}
        </CartContext.Provider>
    )
}
