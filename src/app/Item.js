// import fotoheladera from "../assets/heladeralg.jpg"



// export const getProductos = () => {
//     const task = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {
//                     id: 1,
//                     nombre: "Heladera",
//                     stock: 20,
//                     precio: 920.000,
//                     imagen: { fotoheladera },
//                 },
//             ])
//         }, 2000)
//     })
//     return task
// }

// // export const getHora = () => fetch ("https://api.mercadolibre.com/sites/MLA/search?q=malabares#options").then((res) => res.json())

// export const getItem = () => new Promise((resolve, reject) => {
//     resolve(
//         {
//             id: 1,
//             nombre: "Heladera",
//             stock: 20,
//             precio: 920.000,
//             imagen: { fotoheladera },
//             descripcion: "Heladera LG"
//         }
//     )
// })

import React from 'react'
import Cuenta from "../components/ItemCount"
import ItemListContainer from '../components/ItemListContainer'

const productos = {}
const Item = () => {
    return (
        <div className='padre-productos'>
            {productos.map((producto, i) =>
                <div key={i}  >
                    <div id={producto.id} >
                        <div>
                            <div>
                                <p> {producto.title}</p>
                            </div>
                            <div>
                                <img className='foto' src={producto.imagen} ></img>
                            </div>
                            <div>
                                <Cuenta />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item