// import React, { useContext } from "react"
// import ItemCount from "./ItemCount"
// import {Link} from "react-router-dom"
// import { useState } from "react"
// import { CartContext } from "../components/Cart/Carrito"

// const ItemDetail = ({details}) => {
//     const {agregarAlCarrito} = useContext(CartContext)
//     const [data, setData] = useState([])
//     const onAdd = (q) =>{
//         setData(q)
//     }
//     return (
//         <>
//             <div className='cardDetail'>
//                 <h1><strong> {details.title} </strong></h1>
//                 <img className='imgLego' src={details.image} alt= "fto" />
//                 <h2>Precio: ${details.price}</h2>
//                 <p className='description'>Descripción: {details.description}</p>
//                 <ItemCount stock = {25} onAdd = {onAdd}/>
//             </div>
            
//             <div className="botonDetail">
//             <Link to = {"/product/"}>
//                 <button className = "btn btn-dark">
//                     Volver
//                 </button>
                
//             </Link>
//             <div className="terminar">
//                 <Link to = {"/cart/"}><button className = "btn btn-dark" onClick = {() => agregarAlCarrito(data[0])}>Agregar al Carrito</button>
//                 </Link>
//             </div>
//             </div>
            
//         </>
        
//     )
// }

// export default ItemDetail


import React from "react"
import ItemCount from "../components/ItemCount"
import {Link} from "react-router-dom"
import { useCartContext } from "../components/Cart/CartContext"
import { useState } from "react"

const ItemDetail = ({details}) => {
    const [cuenta, setCuenta] = useState(false)
    const {addToCart} = useCartContext()
    const onAdd = (quantity) =>{
        addToCart(details, quantity)
        setCuenta(true)
    }
    
    return (
        <>
            <div className='cardDetail'>
                <h1><strong> {details.title} </strong></h1>
                <img className='imgLego' src={details.image} alt= "fto" />
                <h2>Precio: ${details.price}</h2>
                <p className='description'>Descripción: {details.description}</p>
                
            </div>

            {
                cuenta
                ? <Link to = "/cart/">Terminar Compra</Link>
                : <ItemCount stock = {5} initial = {1} onAdd = {onAdd}/>
            }
            
            <div className="botonDetail">
            <Link to = {"/product/"}>
                <button className = "btn btn-dark">
                    Volver
                </button>
                
            </Link>
            </div>
            
        </>
        
    )
}

export default ItemDetail