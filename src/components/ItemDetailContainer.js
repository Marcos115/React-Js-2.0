

// import React, {useEffect, useState} from 'react'
// import ItemDetail from './ItemDetail'
// import { useParams } from 'react-router-dom'
// import { Loader } from './Loader'
// import  {productos}  from '../productos'

// const ItemDetailContainer = () => {

//     const {id} = useParams()
//     const [producto, setProducto] = useState()

//     const getProduct = () => new Promise((res, rej) => {
//         setTimeout(() => res(productos.find(product => product.id === Number(id))), 2000)
//     })

//     useEffect(() => {
//         getProduct()
//             .then(res => setProducto(res))
//     }, )

//     return (
//         <>
//             {
//                 producto ? < ItemDetail producto={producto} /> : <Loader />
//             }
//         </>
//     )
// }

// export default ItemDetailContainer


import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Productos from "../productos"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [details, setDetails] = useState([])
    useEffect(() => {
        getItem().then(res => setDetails(res.find((Productos) => Number(Productos.id) === Number(itemId))))
    }, [itemId])
    const getItem = () => new Promise((res, rej) => {
        setTimeout(() =>
            res(Productos),
            2000)
    });
    return (
        <div><ItemDetail details={details} /></div>
    )
}
export default ItemDetailContainer