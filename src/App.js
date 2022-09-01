// import personas from "./data/personas.json";

/*const App = () => {
  return (
    <div className="App">
      <p>Electrodomésticos</p>
      {
        personas.map( persona => (
          <div className="App">
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <hr></hr>
          </div>
        ))
      }
    </div>
  );
}*/

/*import MostrarCarrito from "./components/MostrarCarrito";*/
/*import Producto from "./components/Producto";*/
// import NavBar from "./components/NavBar";
// import "./app/style.css";
// import { ItemListContainer } from "./components/ItemListContainer";






// function App () {
//   return (
//     <div className="App">
//       <NavBar />
//       <ItemListContainer greetings="Bienvenido" />
//     </div>
//   )
// }





/*const App = () => {
  const mostrarTexto = () => {
    alert("texto")
  }
  return (
    <>
      <MostrarCarrito cart={3} />
      <Producto mostrarMensaje={4}>
        <h3>Titulo</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum quod facilis veritatis vitae nulla eum blanditiis aut! Sapiente, maxime. Ea quas quod quidem nam reprehenderit sit sed esse!</p>
      </Producto>
    </>
  );
}*/



import NavBar from "./components/NavBar";
import Producto from "./components/Producto"
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./app/style.css";

const App = () => {
    const mostrarAlerta = () => {
        alert("Carrito de compras")
    }
    return (
        <div>
            <NavBar />
            <CartWidget mostrarMensaje={mostrarAlerta} />
            <Producto mostrarMensaje={mostrarAlerta} />
            <ItemListContainer />
        </div>
    )

}

export default App;



