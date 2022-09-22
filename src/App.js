
import "./app/style.css";
import  Router  from "./app/Router";
// import { useState } from "react";
// import { createItem, getItems, deleteItem  } from "./app/api";
// import { async } from "@firebase/util";
// import Renderizados from "./components/Renderizados";
// import RenderizadosB from "./components/RenderizadosB";
// import { useState } from "react";
// import Event from "./components/Event"
// import Mascara from "./components/Mascara"
// import Hijo from "./components/Hijo"
// import A from "./components/A";
// import B from "./components/B";
// import Provider from "./app/Provider";




const App = () => {
    // const [productoName, setproductoName] = useState();

    return (
        <div>

            <Router />
{/* 
            <input type="text" onChange={e => setproductoName(e.currentTarget.value)}></input>

            <button onClick={async () => {
                await createItem({ name: productoName })
                getItems()
            }}>Guardar Producto</button>

            <button onClick={async () => {
                await deleteItem({ name: productoName})
                getItems()
            }} >Borrar Producto</button> */}
        </div>

    )

}
export default App



