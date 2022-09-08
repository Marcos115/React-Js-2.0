import React, { useState } from 'react'

const A = () => {
    const [miEstado, setMiEstado] = useState(0);
    const [miEstado2, setMiEstado2] = useState(0);

    return (
        <>
            <div class = "sumaresta">
            <p>Contador</p>
            <button onClick={() => setMiEstado(miEstado - 1)}> - </button>
            <p>{miEstado + miEstado2}</p>
            <button onClick={() => setMiEstado2(miEstado2 + 1)}> + </button>
            </div>
        </>
    )
}

export default A