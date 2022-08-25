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


import NavBar from "./components/NavBar";
import "./app/style.css";

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  )
}













export default App;
