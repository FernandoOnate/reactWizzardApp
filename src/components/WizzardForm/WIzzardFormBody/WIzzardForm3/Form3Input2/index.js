import { Form, Col } from "react-bootstrap";
import { useEffect } from "react";
export default function Form3Input2(props) {
  const { formData, onSetFormData, inputTwoValid, setInputTwoValid } = props;
  useEffect(() => {
    if (!formData.fAnimal.length) {
      setInputTwoValid(false);
    } else {
      setInputTwoValid(true);
    }
  }, [formData.fAnimal, inputTwoValid]);
  return (
    <Form.Group as={Col} md="12" controlId="favoriteAnimal">
      <Form.Label className="Input-Label">Your favorite animal:</Form.Label>
      <Form.Control
        type="text"
        placeholder="An animal"
        required
        value={formData.fAnimal}
        onChange={(e) =>
          onSetFormData({ ...formData, fAnimal: e.target.value })
        }
        isValid={inputTwoValid}
        isInvalid={!inputTwoValid}
      />
      <Form.Control.Feedback>That animal is great!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid input.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
