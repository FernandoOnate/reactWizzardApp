import Form2Input1 from "./Form2Input1";
import Form2Input2 from "./Form2Input2";
import Form2Input3 from "./Form2Input3";
import { Row } from 'react-bootstrap';
export default function WizzardForm2(props) {
  const { formTwoData, onSetFormTwoData } = props;
  return (
    <div className="rows-container">
      <Row className="mb-3">
        <Form2Input1
          inputOneData={formTwoData}
          onSetInputOneData={onSetFormTwoData}
        />
      </Row>
      <Row className="mb-3">
        <Form2Input2
          inputTwoData={formTwoData}
          onSetInputTwoData={onSetFormTwoData}
        />
      </Row>
      <Row className="mb-3">
        <Form2Input3
          inputThreeData={formTwoData}
          onSetInputThreeData={onSetFormTwoData}
        />
      </Row>
    </div>
  );
}
