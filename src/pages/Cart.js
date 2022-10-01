import React from 'react'
import NavBar from '../components/NavBar'
import { useCartContext } from '../components/Cart/CartContext'


const Cart = () => {
    const {cart, deleteProduct, totalPrice, totalQty, cleanProduct} = useCartContext()
    return (
        <div>
            <NavBar/>
            <div  className='carrito'>
            <p>Este es el Carrito</p>
            {cart.length > 0 ? <div><p>Cantidad de Productos: {totalQty}</p>
            <p>Precio Total: ${totalPrice}</p></div>
            : "No hay Items"}
            <>

            </>
            </div>
            {cart.length > 0 ? (
                <div>
                <ul>
                    {cart.map((item, index) => {
                        return(<li key = {index}>
                            <p>{item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <img src = {item.image} alt = "fotos"/>
                            <p>${item.quantity*item.price}</p>
                            <button onClick={() => deleteProduct(item.id)} className = "btn btn-dark">Eliminar del Carrito</button>
                        </li>
                        )
                    })}
                </ul>
                </div>
            ) : <></>}

            <button onClick={() => cleanProduct()} className = "btn btn-dark">Limpiar Carrito</button>
            
        </div>
    )
}

export default Cart
