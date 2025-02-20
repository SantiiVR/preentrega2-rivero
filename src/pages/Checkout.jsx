import React from 'react'
import PurchaseForm from '../components/PurchaseForm'
import Summary from '../components/Summary'
/*TODO:
incluir dormulario de registro (controlado con formik yup
agregar resumen de compra del cart context
agregar la compra y el usuario a la base de datos
redirigir al brief
 */
const Checkout = () => {
  return (
    <div className='flex justify-evenly mt-20'>
      <div className='bg-blue-700 w-2/5'>
        <h1>Registro</h1>
        <PurchaseForm/>
        </div>
      <div className='bg-red-700 w-2/5'>
        <Summary />
      </div>
    </div>
  )
}

export default Checkout