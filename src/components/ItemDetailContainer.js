
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

import {useEffect, useState} from 'react'
import {getItem} from '../components/Detalles'
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    useEffect(() => {
        getItem().then ((product) => {
            setProduct(product)
        })
        
    }, [])

    return (
        <ItemDetail producto = {product} />
    )
}

export default ItemDetailContainer
