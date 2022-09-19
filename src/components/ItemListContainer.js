


// import React from 'react'
// import { useState, useEffect } from 'react';
// import productos from "../productos"
// import ItemList from './ItemList';
// const ItemListContainer = () => {
//     const [items, setItem] = useState([])
//     useEffect(() => {
//         const task = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(productos);
//             }, 2000)
//         });
//         task.then((res) => {
//             setItem(res)
//         });
//     }, []);
//     return (
//         <div><ItemList props={items} /></div>
//     )
// }


import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState} from "react"
import productos from "../productos"

const ItemListContainer = () => {
    const [items, setItem] = useState([])
        useEffect(() => {
            const task = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos)
                }, 2000)
            })
            task.then((res) => {
                setItem(res)
            })
        }, [])
    return (
        <div><ItemList props = {items}/></div>
    )
}

export const getItem = () => new Promise ((resolve, reject) => {
    resolve(
        {
            id: 1,
            nombre: "Heladera",
            precio: "$500000",
            stock: 15,
            imagen: {},
            descripcion: "Heladera marca LG"
        }
    )})

export default ItemListContainer
