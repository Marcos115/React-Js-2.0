import fotoheladera from "../assets/heladeralg.jpg"
import fotohorno from "../assets/horno.jpg"

export const getItem = () => new Promise ((resolve, reject) => {
    resolve(
        {
            id: 1,
            title: "Heladera",
            price: "$500000",
            stock: 15,
            image: fotoheladera,
            descripcion: "Heladera marca LG"
        },
        {
            id: 2,
            title: "Horno",
            price: 200000,
            stock: 15,
            image: fotohorno,
            descripcion: "Horno marca ATMA"
        }
    )})