import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../api/apiProducts'

const Brief = () => {
  const { id } = useParams()
  const [order, setOrder] = useState({})

  async function fillOrder() {
    const fetchedOrder = await getOrderById(id)
    setOrder(fetchedOrder)
  }

  useEffect(() => {
    fillOrder()
  }, [id]) 

  useEffect(() => {
    console.log(order)  
  }, [order]) 

  return (
    <div>
      <h1>Order ID: {id}</h1>
      <pre>{JSON.stringify(order, null, 2)}</pre> {}
    </div>
  )
}

export default Brief
