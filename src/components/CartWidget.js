import React from 'react'
import fotocarrito from "../assets/carrito.png"

const CartWidget = ({mostrarMensaje}) => {
return (
    <div>
        <img class="carritofoto" src={fotocarrito} alt="" onClick={mostrarMensaje}/>
        </div>
    )
}

export default CartWidget