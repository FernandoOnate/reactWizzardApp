import Form2Input1 from "./Form2Input1";
import Form2Input2 from "./Form2Input2";
import Form2Input3 from "./Form2Input3";
import { Row } from 'react-bootstrap';
export default function WizzardForm2() {
  return (
    <div className="rows-container">
      <Row className="mb-3">
        <Form2Input1 />
      </Row>
      <Row className="mb-3">
        <Form2Input2 />
      </Row>
      <Row className="mb-3">
        <Form2Input3 />
      </Row>
    </div>
  );
}
