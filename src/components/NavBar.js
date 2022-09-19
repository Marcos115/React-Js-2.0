

import foto from "../assets/logo.png"


const NavBar = () => {
    return (
        <div>
            <div>
            <h1 class = "bienvenidos">Bienvenidos</h1>
            <img class="logo" src={foto} alt="" />
            </div>
            <div class="Navbar">
                <ul>
                    <li><a href=".">Inicio</a></li>
                </ul>
                <ul>
                    <li><a href=".">Productos</a></li>
                </ul>
                <ul>
                    <li><a href=".">Contacto</a></li>
                </ul>
                <ul>
                    <li><a href=".">Sobre Nosotros</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;

// import { Link } from "react-router-dom"

// const NavBar = () => {
//     return (
//         <div>
//             <div>
//             <h1 className = "bienvenidos">Bienvenidos</h1>
//             <img className ="logo" src={foto} alt="" />
//             </div>
//             <div className="Navbar">
//                 <ul>
//                     <li><Link to = "/">Inicio</Link></li>
//                 </ul>
//                 <ul>
//                     <li><Link to ="/product/">Productos</Link></li>
//                 </ul>
//                 <ul>
//                     <li><Link to ="/detail/">Detalles de los Productos</Link></li>
//                 </ul>
//                 <ul>
//                     <li><Link to = "/cart/">Carrito</Link></li>
//                 </ul>
//                 <ul>
//                     <li><Link to = "/contact/">Contacto</Link></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default NavBar;