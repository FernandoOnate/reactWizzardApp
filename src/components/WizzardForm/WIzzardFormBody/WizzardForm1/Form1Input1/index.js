import { useEffect } from "react";
import { Form, Col } from "react-bootstrap";

export default function Form1Input1(props) {
  const { formData, onSetFormData, inputOneValid, setInputOneValid } = props;

  //this useEffect validates if the input one is valid or not, that state depends of the user input typing
  // este useeffec valida si el lo que el usuario está escribiendo en el input es valido o no dependiendo de las condiciones que se coloquen
  useEffect(() => {
    if (!formData.email.length) {
      setInputOneValid(false);
    } else {
      if (
        formData.email.includes("@") &&
        (formData.email.includes(".com") ||
          formData.email.includes(".edu.co") ||
          formData.email.includes(".co"))
      ) {
        setInputOneValid(true);
      } else {
        setInputOneValid(false);
      }
    }
  }, [formData.email]);
  return (
    <Form.Group as={Col} md="12" controlId="validationCustom01">
      <Form.Label className="Input-Label">E-Mail:</Form.Label>
      <Form.Control
        value={formData.email}
        type="email"
        placeholder="Your e-mail"
        onChange={(e) => onSetFormData({ ...formData, email: e.target.value })}
        required
        isValid={inputOneValid}
        isInvalid={!inputOneValid}
      />
      <Form.Control.Feedback>Yup, that looks like a valid e-mail.</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please make sure the "@" or ".com" or ".edu.co" or ".co" is include on
        the e-mail input.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
