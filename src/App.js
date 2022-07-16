import logo from './logo.svg';
import './App.css';
import HolaMundo, { AdiosMundo } from './components/HolaMundo';
import SaludarProps from './components/Saludar';
export function Saludo() {
  return (
    <p>Hola, este es un saludo desde un nuevo componente en el componente App</p>
  );
}
function App() {
  
  // const userName = 'Fernando';
  // const age = '24';
   const user = {
    nombre: 'Fernando oñate',
    edad: 24,
    color:'Blue'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Primeras interacciones con react, esto es un h1</h1> */}
        {/* <p>Vamos a aprender react desde 0. Hola mundo.</p> */}
        {/* <HolaMundo /> */}
        {/* <Saludo /> */}
        {/* <SaludarProps nombre="Fernando Oñate" edad="24"/> */}
        {/* <SaludarProps nombre="Peppa Pig" edad="12"/> */}
        <SaludarProps nombre={user.nombre} edad={user.edad} color={user.color}/>
        {/* <AdiosMundo /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender react.
        </a> */}
      </header>
    </div>
  );
}

export default App;
