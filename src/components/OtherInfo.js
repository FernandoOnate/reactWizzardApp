import { Form } from "react-bootstrap";
export default function OtherInfo({ dataForm, setDataForm }) {
  return (
    <div className="other-info-container">
      <Form.Group className="mb-3" controlId="favoriteColor">
        <Form.Label>Your favorite color:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Favorite color"
          value={dataForm.favoriteColor}
          onChange={(e) => {
            setDataForm({ ...dataForm, favoriteColor: e.target.value });
          }}
          required
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="favoriteAnimal">
        <Form.Label>Your favorite animal:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Animal"
          value={dataForm.favoriteAnimal}
          onChange={(e) => {
            setDataForm({ ...dataForm, favoriteAnimal: e.target.value });
          }}
          required
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
    </div>
  );
}
