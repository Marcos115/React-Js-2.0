import React from 'react'
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
export default ItemDetail