// import React from 'react'
// import { useState } from 'react'

// const ItemCount = ({stock = 15, cuentaInicial = 0, onAdd}) => {
//     const [contador, setContador] = useState (cuentaInicial)
//     if(contador > 15){
//         setContador(cuentaInicial)
//         console.log("No hay stock")
//     }else if(contador < 0){
//         setContador(cuentaInicial)
//         console.log("No existe")
//     }
    
//     return (
//     <div>
//         Stock: {stock} 
//         <button onClick = {() => setContador(cuentaInicial)} className = "sumaresta">Resetear</button>
//         <button onClick = {() => setContador(contador - 1)} className = "sumaresta"> - </button>

//         {contador}

//         <button onClick = {() => setContador(contador + 1)} className = "sumaresta"> + </button>
//         <button onClick = {() => onAdd(contador)} className = "sumaresta">Agregar al Carrito</button>

        
//     </div>
//     )
// }

// export default ItemCount

import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock = 5, initial = 0, onAdd}) => {
    const [cant, setCant] = useState (0)
    const [quantity, setQuantity] = React.useState(stock)
    const decrease = () => {
        setCant(cant - 1);
        setQuantity(quantity + 1)
    }
    const increase = () => {
        setCant(cant + 1);
        setQuantity(quantity - 1)
    }
    onAdd = (cant) => {
        alert(`Se agregaron ${cant} a tu carrito`)
    }
    return (
    <div>
        <button onClick = {
            () => { decrease()}}
            disabled = {cant === initial}
        >
            -
        </button>
        <p>{cant}</p>
        <button onClick = {() => {increase()}}
        disabled = {cant === stock} >
            +
        </button>
        <button variant = "success" onClick = {() => onAdd(cant)}>Agregar al carrito</button>
        <p>Stock disponible: {quantity}</p>
    </div>
    
    )
}

export default ItemCount