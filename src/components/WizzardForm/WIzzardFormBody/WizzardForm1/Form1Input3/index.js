
import { Form, Col, InputGroup } from "react-bootstrap";
export default function Form1Input1(props) {
  const { inputThreeData, onSetInput3Form1Data } = props;
  return (
    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
      <Form.Label className="Input-Label">Username:</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control
          type="text"
          value={inputThreeData.username}
          placeholder="Username"
          aria-describedby="inputGroupPrepend"
          required
          onChange={(e)=>onSetInput3Form1Data({...inputThreeData,username:e.target.value})}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
