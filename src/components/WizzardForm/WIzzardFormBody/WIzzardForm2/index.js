import Form2Input1 from "./Form2Input1";
import Form2Input2 from "./Form2Input2";
import Form2Input3 from "./Form2Input3";
import { Row } from "react-bootstrap";
import { useEffect,useState } from "react";
export default function WizzardForm2(props) {
  const { formData, onSetFormData, formTwoStatus, setFormTwoStatus } = props;

  const [inputOneValid, setInputOneValid] = useState(null);
  const [inputTwoValid, setInputTwoValid] = useState(null);
  const [inputThreeValid, setInputThreeValid] = useState(null);

  useEffect(() => {
    if (inputOneValid && inputTwoValid && inputThreeValid) {
      setFormTwoStatus(true);
    } else {
      setFormTwoStatus(false);
    }
  }, [inputOneValid, inputTwoValid, inputThreeValid, formTwoStatus]);

  return (
    <div className="rows-container">
      <Row className="mb-3">
        <Form2Input1
          formData={formData}
          onSetFormData={onSetFormData}
          inputOneValid={inputOneValid}
          setInputOneValid={setInputOneValid}
        />
      </Row>
      <Row className="mb-3">
        <Form2Input2
          formData={formData}
          onSetFormData={onSetFormData}
          inputTwoValid={inputTwoValid}
          setInputTwoValid={setInputTwoValid}
        />
      </Row>
      <Row className="mb-3">
        <Form2Input3
          formData={formData}
          onSetFormData={onSetFormData}
          inputThreeValid={inputThreeValid}
          setInputThreeValid={setInputThreeValid}
        />
      </Row>
    </div>
  );
}
