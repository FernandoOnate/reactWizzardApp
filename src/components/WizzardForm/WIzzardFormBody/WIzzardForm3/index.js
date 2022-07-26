import Form3Input1 from "./Form3Input1"
import Form3Input2 from "./Form3Input2"
import { Row } from 'react-bootstrap';
export default function WizzardForm3(props) {
  const { formThreeData, onSetFormThreeData } = props;
  return (
    <div className="rows-container">
      <Row className="mb-3">
        <Form3Input1
          inputOneData={formThreeData}
          onSetInputOneData={onSetFormThreeData}
        />
      </Row>
      <Row className="mb-3">
        <Form3Input2
          inputTwoData={formThreeData}
          onSetInputTwoData={onSetFormThreeData}
        />
      </Row>
    </div>
  );
}
