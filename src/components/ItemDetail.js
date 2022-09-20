import React from 'react'
// import ItemCount from "./ItemCount"
import fotoheladera from "../assets/heladeralg.jpg"

const ItemDetail = ({ producto }) => {

    return (
        <div className="detailedInfo">
            <img src={fotoheladera} alt="foto" />
            <ul>
            <li className="itemTitle">{producto.title}</li>
            <li>{producto.price}</li>
            <li >{producto.stock}</li>
            <li className="descripcion">{producto.descripcion}</li>
            </ul>
        </div>
            )
}

// const ItemDetail = ({ item }) => {
//     return (
//         <>
//         <div className='detailedInfo'>
//             <div>
//                 <h2>Detalles</h2>
//                 <p className='itemTitle'>{item.nombre}</p>
//                 <img src={fotoheladera} alt=""/>
//                 <p className='descripcion'>{item.descripcion}</p>
//                 <ItemCount stock={item.stock}/>
//             </div>
//         </div>
//         </>
//     )
// }





 export default ItemDetail