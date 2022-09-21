
// import {useEffect, useState} from 'react'
// import { getItem} from '../components/ItemListContainer'
// import ItemDetail from './ItemDetail'

// const ItemDetailContainer = () => {

//     const [product, setProduct] = useState({})
//     useEffect(() => {
//         getItem().then ((product) => {
//             setProduct(product)
//         })
        
//     }, [])

//     return (
//         <ItemDetail item = {product} />
//     )
// }

// export default ItemDetailContainer

// import {useEffect, useState} from 'react'
// import {getItem} from '../components/Detalles'
// import ItemDetail from '../components/ItemDetail'

// const ItemDetailContainer = () => {

//     const [product, setProduct] = useState({})
//     useEffect(() => {
//         getItem().then ((product) => {
//             setProduct(product)
//         })
        
//     }, [])

//     return (
//         <ItemDetail producto = {product} />
//     )
// }

// export default ItemDetailContainer

import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Loader } from './Loader'
import  {productos}  from '../productos'

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [producto, setProducto] = useState()

    const getProduct = () => new Promise((res, rej) => {
        setTimeout(() => res(productos.find(product => product.id === Number(id))), 2000)
    })

    useEffect(() => {
        getProduct()
            .then(res => setProducto(res))
    }, )

    return (
        <>
            {
                producto ? < ItemDetail producto={producto} /> : <Loader />
            }
        </>
    )
}

export default ItemDetailContainer
