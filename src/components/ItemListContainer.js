import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState} from "react"
import {getFirestore, collection, getDocs} from "firebase/firestore"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
        useEffect(() => {
            const recuperarItem = getFirestore()
            const recuperarCollection = collection (recuperarItem, "Items")
            getDocs(recuperarCollection)
            .then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }, [])
    return (
        <div><ItemList props = {productos}/></div>
    )
}

export default ItemListContainer