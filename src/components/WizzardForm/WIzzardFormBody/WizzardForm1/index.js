import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Form1Input1 from "./Form1Input1";
import Form1Input2 from "./Form1Input2";
import Form1Input3 from "./Form1Input3";

export default function WizzardForm1(props) {

  const {
    formData,
    onSetFormData,
    formOneStatus,
    setFormOneStatus,
  } = props;

  const [inputOneValid, setInputOneValid] = useState(null);
  const [inputTwoValid, setInputTwoValid] = useState(null);
  const [inputThreeValid, setInputThreeValid] = useState(null);

  useEffect(() => {
    if (inputOneValid && inputTwoValid && inputThreeValid) {
      setFormOneStatus(true);
    } else {
      setFormOneStatus(false);
    }
  }, [inputOneValid, inputTwoValid, inputThreeValid, formOneStatus]);
  return (
    <div className="rows-container">
      <Row className="mb-3">
        <Form1Input1
          formData={formData}
          onSetFormData={onSetFormData}
          inputOneValid={inputOneValid}
          setInputOneValid={setInputOneValid}
        />
      </Row>
      <Row className="mb-3">
        <Form1Input2
          formData={formData}
          onSetFormData={onSetFormData}
          inputTwoValid={inputTwoValid}
          setInputTwoValid={setInputTwoValid}
        />
      </Row>
      <Row className="mb-3">
        <Form1Input3
          formData={formData}
          onSetFormData={onSetFormData}
          inputThreeValid={inputThreeValid}
          setInputThreeValid={setInputThreeValid}
        />
      </Row>
    </div>
  );
}
