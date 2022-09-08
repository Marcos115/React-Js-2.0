import fotoheladera from "../assets/heladeralg.jpg"



export const getProductos = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    nombre: "Heladera",
                    stock: 20,
                    precio: 920.000,
                    imagen: { fotoheladera },
                },

                // {
                //     id: 2,
                //     nombre: "Teclado",
                //     precio: 7000,
                //     stock: 5,
                //     imagen: {teclado},
                // }
            ])
        }, 2000)
    })
    return task
}

// export const getHora = () => fetch ("https://api.mercadolibre.com/sites/MLA/search?q=malabares#options").then((res) => res.json())

export const getItem = () => new Promise((resolve, reject) => {
    resolve(
        {
            id: 1,
            nombre: "Heladera",
            stock: 20,
            precio: 920.000,
            imagen: { fotoheladera },
            descripcion: "Heladera LG"
        }
    )
})