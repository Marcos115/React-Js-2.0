


// import { useEffect, useState } from "react";
// import NavBar from "./components/NavBar";
// import Producto from "./components/Producto"
// import CartWidget from "./components/CartWidget";
// import ItemListContainer from "./components/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer";
// import { getItem } from "./components/ItemListContainer";
// import "./app/style.css";


// const App = () => {
//     const mostrarAlerta = () => {
//         alert("Carrito de compras")
//     }
//     const [item, setItem] = useState({})
//     useEffect(() => {
//         getItem().then(item => setItem(item))
//     })
//     return (
//         <div>
//             <NavBar />
//             <CartWidget mostrarMensaje={mostrarAlerta} />
//             <Producto mostrarMensaje={mostrarAlerta} />
//             <ItemListContainer />
//             <ItemDetailContainer item={item} />
//         </div>

//     )

// }





// export default App;


import "./app/style.css";
import Router from "./app/Router";
// import Event from "./components/Event"
// import Mascara from "./components/Mascara"
// import Hijo from "./components/Hijo"
// import A from "./components/A";
// import B from "./components/B";
// import Provider from "./app/Provider";
import product from "./app/Item"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"




const App = () => {
    const hacerCosas = () => {
        alert("Hacer Cosas")
    }
    return (
        <div>
            <Router />
            <ItemListContainer />
            <ItemDetailContainer producto={product} />
            {/* <Event /> */}
            {/* <Mascara /> */}
            {/* <Hijo hacerCosas={hacerCosas} /> */}
            {/* <Provider>
                <A />
                <B />
            </Provider> */}
        </div>

    )

}

export default App;




