import fotoheladera from "./assets/heladeralg.jpg"
import fotohorno from "./assets/horno.jpg"
import fotomicroondas from "./assets/microondas.jpg"
import fotoaire from "./assets/aire.jpg"


const productos = () => [
    {
        id: 1,
        title: "Heladera LG",
        price: 500000,
        stock: 15,
        image: fotoheladera,
    },
    {
        id: 2,
        title: "Horno ATMA",
        price: 200000,
        stock: 15,
        image: fotohorno,
    },
    {
        id: 3,
        title: "Microondas",
        price: 120000,
        stock: 15,
        image: fotomicroondas,
    },
    {
        id: 4,
        title: "Aire",
        price: 200000,
        stock: 15,
        image: fotoaire,
    },
]

export default productos