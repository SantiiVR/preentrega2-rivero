

const Summary = ({order}) => {
    

    return (
        
            <div>
                        <span>{p.name} </span>
                <span>X {p.qty} </span>
                <span>$ {p.qty * p.price} </span>
            <div className='flex justify-between px-10 text-2xl font-black p-2 '>
            <h3>Nombre</h3>
            <h3>cantidad</h3>
            <h3>Precio</h3>
            </div>
            {order.products.map((p) => (
            <div key={p.id} className='flex justify-between px-6 font-bold p-3 border-b-2 border-white'>
                <span>{p.name} </span>
                <span>X {p.qty} </span>
                <span>$ {p.qty * p.price} </span>
            </div>
            ))}
            </div>
        
    )
}

export default Summary