import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import FormWizzard from "./components/FormWizzard";
import WizzardForm from './components/WizzardForm'

function App() {
  return (
    <div className="container-fluid">
      {/* <Router basename="/react-app"> */}
      {/* <Stack direction="horizontal" gap={2}> */}
      {/* <Link to="/"> */}
      {/* <Button>Ir a Home</Button> */}
      {/* </Link> */}
      {/* <Link to="/test-wizzard-form"> */}
      {/* <Button>Formuladio wizzard de prueba</Button> */}
      {/* </Link> */}
      {/* <Link to="/wizzard2"> */}
      {/* <Button>Formuladio wizzard2</Button> */}
      {/* </Link> */}
      {/* </Stack> */}
      {/* <Routes> */}
      {/* <Route path="/test-wizzard-form" element={<FormWizzard />} /> */}
      {/* <Route path="/wizzard2" element={<WizzardForm />} /> */}
      {/* <Route path="/" /> */}
      {/* </Routes> */}
      {/* </Router> */}
      <WizzardForm />
    </div>
  );
}

export default App;
