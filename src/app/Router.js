

import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home" 
import Contact from "../pages/Contact"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import ItemDetailContainer from "../components/ItemDetailContainer"
import React from "react"
import ItemListContainer from "../components/ItemListContainer"
import CartProvider from "../components/Cart/CartContext"


const Router = () => (
    <CartProvider>
    <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>} />
            <Route path = "/contact/" element = {<Contact/>} />
            <Route path = "/product/" element = {<Product/>} />
            <Route path = "/cart/" element = {<Cart/>}/>
            <Route path = "/product/:Id" element = {<ItemListContainer/>}/>
            <Route path = "/item/:itemId" element = {<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
)

export default Router