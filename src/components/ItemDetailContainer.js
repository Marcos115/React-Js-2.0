
import {useEffect, useState} from 'react'
import { getItem} from '../components/ItemListContainer'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    useEffect(() => {
        getItem().then ((product) => {
            setProduct(product)
        })
        
    }, [])

    return (
        <ItemDetail item = {product} />
    )
}

export default ItemDetailContainer

