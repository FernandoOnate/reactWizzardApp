import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo'
export function Saludo() {
  return (
    <p>Hola, este es un saludo desde un nuevo componente en el componente App</p>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Primeras interacciones con react, esto es un h1</h1>
        <p>Vamos a aprender react desde 0. Hola mundo.</p>
        <HolaMundo />
        <Saludo />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender react.
        </a>
      </header>
    </div>
  );
}

export default App;
