// import React from 'react'
// // import ItemCount from "./ItemCount"
// import fotoheladera from "../assets/heladeralg.jpg"

// const ItemDetail = ({ producto }) => {

//     return (
//         <div className="detailedInfo">
//             <img src={fotoheladera} alt="foto" />
//             <ul>
//             <li className="itemTitle">{producto.title}</li>
//             <li>{producto.price}</li>
//             <li >{producto.stock}</li>
//             <li className="descripcion">{producto.descripcion}</li>
//             </ul>
//         </div>
//             )
// }

// // const ItemDetail = ({ item }) => {
// //     return (
// //         <>
// //         <div className='detailedInfo'>
// //             <div>
// //                 <h2>Detalles</h2>
// //                 <p className='itemTitle'>{item.nombre}</p>
// //                 <img src={fotoheladera} alt=""/>
// //                 <p className='descripcion'>{item.descripcion}</p>
// //                 <ItemCount stock={item.stock}/>
// //             </div>
// //         </div>
// //         </>
// //     )
// // }





//  export default ItemDetail


import React from "react"
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import { useState } from "react"

const ItemDetail = ( data ) => {
    const [carrito, setCarrito] = useState(false)
    const onAdd = (q) =>{
        setCarrito(true)
    }
    return (
        <>
            <div className='cardDetail'>
                <h1><strong> {data.title}</strong></h1>
                <img className='imgLego' src={data.image} alt={data.title} />
                <h2>Precio: ${data.price}</h2>
                <p className='description'>Descripción: {data.description}</p>
                {
                    carrito
                    ?<Link to = "/cart/">Terminar compra</Link>
                    :<ItemCount stock = {data.stock} onAdd = {onAdd} initial = {0}/>
                }
            </div>
            <Link to = {"/"}>
                <button className = "btn btn-dark">
                    Volver
                </button>
            </Link>
        </>
    )
}

export default ItemDetail
