// import React from 'react'

// const Producto = ({mostrarMensaje, children}) => {
//     return (
//         <div>
//             <p>{mostrarMensaje }</p>
//             <p>{children}</p>
//         {/* <button onClick= {mostrarMensaje}>Añadir al Carrito</button> */}
//         </div>
//     )
// }

// export default Producto;
import React from "react"

const Producto = ( {mostrarMensaje, children}) => {
    return(
        <div>
            <p>{children}</p>
            <button onClick = {mostrarMensaje} className = "añadir">Añadir al carrito</button>
        </div>
    )
}

export default Producto