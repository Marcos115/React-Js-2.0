
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <div>
            <h1 className = "bienvenidos">Electrodomésticos Amador</h1>
            </div>
            <div className="Navbar">
                <ul>
                    <li><Link to = "/">Inicio</Link></li>
                </ul>
                <ul>
                    <li><Link to ="/product/">Productos</Link></li>
                </ul>
                <ul>
                    <li><Link to = "/cart/">Carrito</Link></li>
                </ul>
                <ul>
                    <li><Link to = "/contact/">Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;