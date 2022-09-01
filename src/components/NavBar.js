// import foto from "../assets/logo.png"
// import CartWidget from "./CartWidget";


// function NavBar() {
//     return (
//         <>
//             <div className="nav">
//                 <div className="logo">
//                     <img src={foto} alt=""> </img>
//                 </div>
//                 <ul className="options">
//                     <li className="inicio"><a href="#">HOME</a></li>
//                     <li><a href="#">OFERTAS</a></li>
//                     <li><a href="#">ABOUT US</a></li>
//                     <li><a href="#">CONTACT</a></li>
//                 </ul>
//                 <div className="sumbit">Log in</div>
//                 <CartWidget />
//             </div>
//             <div>
//                 <h2> Las ofertas de la semana</h2>
//             </div>
//         </>
//     )
// }

// export default NavBar;

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