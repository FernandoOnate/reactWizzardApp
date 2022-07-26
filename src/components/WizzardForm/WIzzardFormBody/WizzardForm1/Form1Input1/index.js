import { useEffect} from "react";
import { Form, Col, InputGroup } from "react-bootstrap";

export default function Form1Input1(props) {
  const {
    inputOneData,
    onSetFormOneData,
    inputOneValid,
    setInputOneValid,
    inputOneInvalid,
    setInputOneInValid,
  } = props;

  //this useEffect validates if the input one is valid or not, that state depends of the user input typing
  // este useeffec valida si el lo que el usuario está escribiendo en el input es valido o no dependiendo de las condiciones que se coloquen
  useEffect(() => {
    if (!inputOneData.email.length) {
      setInputOneInValid(true);
      setInputOneValid(false);  
    } else {
      if (
        inputOneData.email.includes("@") &&
        (inputOneData.email.includes(".com") ||
          inputOneData.email.includes(".edu.co") ||
          inputOneData.email.includes(".co"))
      ) {
        setInputOneValid(true);
        setInputOneInValid(false);
      } else {
        setInputOneInValid(true);
        setInputOneValid(false);
      }
    }
  }, [inputOneData.email]);
  return (
    <InputGroup hasValidation>
      <Form.Group as={Col} md="12" controlId="validationCustom01">
        <Form.Label className="Input-Label">E-Mail:</Form.Label>
        <Form.Control
          value={inputOneData.email}
          type="email"
          placeholder="Your e-mail"
          onChange={(e) =>
            onSetFormOneData({ ...inputOneData, email: e.target.value })
          }
          required
          isValid={inputOneValid}
          isInvalid={inputOneInvalid}
        />
        <Form.Control.Feedback>Valid e-mail!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please make sure the "@" or ".com" or ".edu.co" or ".co" is include on the e-mail input.
        </Form.Control.Feedback>
      </Form.Group>
    </InputGroup>
  );
}
