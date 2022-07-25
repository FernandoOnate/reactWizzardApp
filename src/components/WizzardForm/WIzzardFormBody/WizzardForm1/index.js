import { Row } from "react-bootstrap";
import Form1Input1 from "./Form1Input1";
import Form1Input2 from "./Form1Input2";
import Form1Input3 from "./Form1Input3";

export default function WizzardForm1() {
  return (
    <div className="rows-container">
      <Row className="mb-3">
        <Form1Input1 />
      </Row>
      <Row className="mb-3">
        <Form1Input2 />
      </Row>
      <Row className="mb-3">
        <Form1Input3 />
      </Row>
    </div>
  );
}
