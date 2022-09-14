// import React from 'react'
// import ItemList from './ItemList'


// const ItemListContainer = () => {
//     return (
//         <div>
//             <h1>Catálogo</h1>
//             <div className = "sumaresta">
//                 <ItemList/>
//             </div>
//         </div>
//     )
// }

// export default ItemListContainer


import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import fotoheladera from "../assets/heladeralg.jpg"
import fotohorno from "../assets/horno.jpg"
import fotomicroondas from "../assets/microondas.jpg"
import fotoaire from "../assets/aire.jpg"


const producto1 = {
    id: 1,
    title: "S",
    price: 5000,
    imagen: { fotoheladera },
}
const producto2 = {
    id: 2,
    title: "S",
    price: 5000,
    imagen: { fotohorno },
}
const producto3 = {
    id: 3,
    title: "S",
    price: 5000,
    imagen: { fotomicroondas },
}
const producto4 = {
    id: 4,
    title: "S",
    price: 5000,
    imagen: { fotoaire },
}
const ItemListContainer = () => {
    const [setProducto, productos] = useState([])
    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    ItemListContainer.then(res => {
                        setProducto({ productos })
                    }))
            }, 2000);
            return (
                <>
                    <div>
                        <ItemList productos={productos} />
                    </div>
                </>
            )
        })
    }, [])
}

export const getItem = () => new Promise ((resolve, reject) => {
    resolve(
        {
            id: 1,
            nombre: "Mouse",
            precio: "$5000",
            stock: 5,
            imagen: {},
            descripcion: "Mouse marca RedDragon"
        }
    )})

export default ItemListContainer

