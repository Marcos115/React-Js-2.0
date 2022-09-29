import fotoheladera from "./assets/heladeralg.jpg"
import fotohorno from "./assets/horno.jpg"
import fotomicroondas from "./assets/microondas.jpg"
import fotoaire from "./assets/aire.jpg"


const productos = [
    {
        id: 1,
        title: "Heladera",
        image: fotoheladera,
        price: 500000,
        stock: 5,
        description: "Heladera LG"
    },
    {
        id: 2,
        title: "Horno",
        image: fotohorno,
        price: 200000,
        stock: 5,
        description: "Horno ATMA"
    },
    {
        id: 3,
        title: "Microondas",
        image: fotomicroondas,
        price: 100000,
        stock: 5,
        description: "Microondas ATMA"
    },
    {
        id: 4,
        title: "Aire",
        image:fotoaire,
        price: 200000,
        stock: 5,
        description: "Aire LG"
    },
]
export default productos