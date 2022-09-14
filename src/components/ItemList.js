// import React, { useEffect, useState } from 'react'
// import { getProductos } from '../app/Item.js'
// import ItemCount from './ItemCount'
// import fotoheladera from "../assets/heladeralg.jpg"

// const ItemList = () => {
//     const [p, setP] = useState([])
//     useEffect(() => {
//         const getInfo = async () => {
//             const items = await getProductos()
//             console.log(items)
//             setP(items)
//         }
//         getInfo()
//     }, [])
//     return (
//             <div className = "cartas">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <div className="card">
//                             <img src={fotoheladera} alt = ""/>
//                             <div className="card-body">
//                                 <h4 className="card-title">{p.map(producto => <p>{producto.nombre}</p>)}</h4>
//                                 <p className="card-text text-secondary">{p.map(producto => <p>${producto.precio}</p>)}</p>
//                                 <ItemCount onAdd = {(contador) => console.log(contador)}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//     )
// } 

// export default ItemList

import React, { useEffect, useState } from 'react'
import Item from "../app/Item"

const ItemList = ({ productos }) => {
    <>{
        productos.map((p) => {
            <Item key={p.id} productos={p} />
        })
    }
    </>
}

export default ItemList