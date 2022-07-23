import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Stack, Row, Col,Container } from "react-bootstrap";
import FormWizzard from "./components/FormWizzard";

function App() {
  return (
    <div className="App">
      <Router basename="/react-app">
        <Stack direction="horizontal" gap={2}>
          <Link to="/">
            <Button>Ir a Home</Button>
          </Link>
          <Link to="/test-wizzard-form">
            <Button>Formuladio wizzard de prueba</Button>{" "}
          </Link>
        </Stack>
        <Routes>
          <Route path="/test-wizzard-form" element={<FormWizzard />} />
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
