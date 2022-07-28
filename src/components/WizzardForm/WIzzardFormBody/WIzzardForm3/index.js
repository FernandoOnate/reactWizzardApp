import Form3Input1 from "./Form3Input1";
import Form3Input2 from "./Form3Input2";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
export default function WizzardForm3(props) {
  const { formData, onSetFormData, formThreeStatus, setFormThreeStatus } =
    props;
  const [inputOneValid, setInputOneValid] = useState(null);
  const [inputTwoValid, setInputTwoValid] = useState(null);

  useEffect(() => {
    if (inputOneValid && inputTwoValid) {
      setFormThreeStatus(true);
    } else {
      setFormThreeStatus(false);
    }
  }, [inputOneValid, inputTwoValid, formThreeStatus]);
  return (
    <div className="rows-container">
      <Row className="mb-3">
        <Form3Input1
          formData={formData}
          onSetFormData={onSetFormData}
          inputOneValid={inputOneValid}
          setInputOneValid={setInputOneValid}
        />
      </Row>
      <Row className="mb-3">
        <Form3Input2
          formData={formData}
          onSetFormData={onSetFormData}
          inputTwoValid={inputTwoValid}
          setInputTwoValid={setInputTwoValid}
        />
      </Row>
    </div>
  );
}
