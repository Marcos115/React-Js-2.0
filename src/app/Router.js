

import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home" 
import Contact from "../pages/Contact"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import ItemDetailContainer from "../components/ItemDetailContainer"


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>} />
            <Route path = "/contact/" element = {<Contact/>} />
            <Route path = "/product/" element = {<Product/>} />
            <Route path = "/cart/" element = {<Cart/>}/>
            <Route path = "/item/:id" element = {<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router