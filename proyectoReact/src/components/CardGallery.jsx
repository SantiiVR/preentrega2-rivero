import React from 'react'
import CardComponent from "./CardComponent"

const CardGallery = ({products } ) => {
  return (
    <div className='flex flex-wrap justify-start gap-10 mx-20 '>
        {products.map ((p) => (

            <CardComponent product={p} />
            
        )
        )}
    </div>
  )
}

export default CardGallery