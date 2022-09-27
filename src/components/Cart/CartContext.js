// import React, { createContext } from "react"
// import { useContext } from "react"
// import { useState } from "react"
// const CartContext = createContext([])
// export const useCartContext = () => useContext(CartContext)

// export function CartProvider({ children }) {
//     const [carrito, setCarrito] = useState([])
//     const limpiarCarrito = () => setCarrito([])

//     const eliminarProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id))

//     const agregarAlCarrito = (item, nuevaCantidad) => {
//         const nuevoCarrito = carrito.filter(prod => prod.id !== item.id)
//         nuevoCarrito.push({ ...item, cantidad: nuevaCantidad })
//         setCarrito(nuevoCarrito)
//     }
//     console.log(carrito)
//     return (
//         <CartContext.Provider value={{ carrito, limpiarCarrito, eliminarProducto, agregarAlCarrito }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

import {createContext, useContext, useState} from "react"

const cartContext = createContext()

export const {Provider} = cartContext

export const useCartContext = () => useContext (cartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQty, setTotalQty] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (details, quantity) => {
        setTotalQty(totalQty + quantity)
        setTotalPrice(totalPrice + details.price * quantity)

        if(isInCart(details.id)){
            const newCart = cart.map((item)=>{
                if(item.id === details.id){
                    return {...item, quantity: item.quantity + quantity}
                }else {
                    return item
                }
            })
            setCart(newCart)
        }else{
            setCart([...cart, {...details, quantity: quantity}])
        }

        console.log(details)
        console.log(quantity)

        
    }
    const isInCart = (id) => {
        return cart.find((details) => details.id === id)
    }

    const deleteProduct = (id) => setCart(cart.filter(details => details.id !== id))

    const valorDelContexto = {cart, addToCart, totalQty, totalPrice, deleteProduct}

    return <Provider value = {valorDelContexto}>{children}</Provider>
}

export default CartProvider