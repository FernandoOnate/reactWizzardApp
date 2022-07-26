import { Row } from "react-bootstrap";
import Form1Input1 from "./Form1Input1";
import Form1Input2 from "./Form1Input2";
import Form1Input3 from "./Form1Input3";

export default function WizzardForm1(props) {
  const {
    formOneData,
    onSetFormOneData,
    formOneInputOneValid,
    onSetFormOneInputOneValid,
    formOneInputOneInvalid,
    onSetFormOneInputOneInvalid,
  } = props;

  return (
    <div className="rows-container">
      <Row className="mb-3">
        <Form1Input1
          inputOneValid={formOneInputOneValid}
          setInputOneValid={onSetFormOneInputOneValid}
          inputOneInvalid={formOneInputOneInvalid}
          setInputOneInValid={onSetFormOneInputOneInvalid}
          inputOneData={formOneData}
          onSetFormOneData={onSetFormOneData}
        />
      </Row>
      <Row className="mb-3">
        <Form1Input2
          inputTwoData={formOneData}
          onSetInput1Form1Data={onSetFormOneData}
        />
      </Row>
      <Row className="mb-3">
        <Form1Input3
          inputThreeData={formOneData}
          onSetInput3Form1Data={onSetFormOneData}
        />
      </Row>
    </div>
  );
}
