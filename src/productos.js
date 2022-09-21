import fotoheladera from "./assets/heladeralg.jpg"
import fotohorno from "./assets/horno.jpg"
import fotomicroondas from "./assets/microondas.jpg"
import fotoaire from "./assets/aire.jpg"


const productos = () => [
    {
        id: 1,
        title: "Cartuchera Amayra",
        image: fotoheladera,
        price: 500000,
        medidas: "190x60 cm.",
    },
    {
        id: 2,
        title: "Bolsito Amayra",
        image: fotohorno,
        price: 200000,
        medidas: "80x90 cm."
    },
    {
        id: 3,
        title: "Set Valijas Wilson",
        image: fotomicroondas,
        price: 100000,
        medidas: "40x30 cm."
    },
    {
        id: 4,
        title: "Valija Amayra",
        image:fotoaire,
        price: 200000,
        medidas: "80x90 cm."
    },
]
export default productos