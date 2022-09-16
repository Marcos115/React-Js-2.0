import fotoheladera from "./assets/heladeralg.jpg"
import fotohorno from "./assets/horno.jpg"
import fotomicroondas from "./assets/microondas.jpg"
import fotoaire from "./assets/aire.jpg"


const productos = () => [
    {
        id: 1,
        title: "Heladera LG",
        price: 5500,
        image: fotoheladera,
    },
    {
        id: 2,
        title: "Horno ATMA",
        price: 6200,
        image: fotohorno,
    },
    {
        id: 3,
        title: "Microondas",
        price: 56600,
        image: fotomicroondas,
    },
    {
        id: 4,
        title: "Aire",
        price: 9000,
        image: fotoaire,
    },
]

export default productos