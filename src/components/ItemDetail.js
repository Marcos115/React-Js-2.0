import React from 'react'
import ItemCount from './ItemCount'
import fotoheladera from "../assets/heladeralg.jpg"

const ItemDetail = ({item}) => {
    <div className = "detailedInfo">

        <div>
            <h2>Información detallada</h2>
            <p className = "itemTitle">{item.nombre}</p>
            <img src = {fotoheladera} alt = ""/>
            <p className = "descripcion">{item.descripcion}</p>
            <ItemCount stock = {item.stock}/>
        </div>
    </div>
}

export default ItemDetail