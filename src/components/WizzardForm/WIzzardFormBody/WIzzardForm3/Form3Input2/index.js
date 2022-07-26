import { Form, Col } from "react-bootstrap";
export default function Form3Input2(props) {
  const { inputTwoData, onSetInputTwoData } = props;

  return (
    <Form.Group as={Col} md="12" controlId="favoriteAnimal">
      <Form.Label className="Input-Label">Your favorite animal:</Form.Label>
      <Form.Control
        type="text"
        placeholder="An animal"
        required
        value={inputTwoData.fAnimal}
        onChange={(e) =>
          onSetInputTwoData({ ...inputTwoData, fAnimal: e.target.value })
        }
      />
      <Form.Control.Feedback>Valid input!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please type a valid input.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
