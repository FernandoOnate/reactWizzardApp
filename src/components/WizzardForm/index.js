import WizzardFormHeader from "./WizzardFormHeader";
import WizzardFormBody from "./WIzzardFormBody";
import WizzarFormFooter from "./WizzardFormFooter";
import { Form } from "react-bootstrap";
import { useState } from "react";
import "./FormStyle.css";
export default function WizzardForm(props) {
  //this array variable contains the title for each form page
  //este vector contiene los titulos de cada formulario
  const FormTitles = ["Sign Up", "Personal Info", "Other Info"];

  // this state variable contains the number of the current page
  // esta variable de estado contiene el número actual de la página
  const [page, setPage] = useState(0);

  // this state boolean variable contains the validation form status
  // esta variable contiene el estado de la validacion del formulario
  const [validated, setValidated] = useState(false);

  // this arrow function handle the submit event when the submit button is pressed
  // esta funcion flecha controla el evento de submit cuando el botón de submit es enviado
  const handleSubmit = (event) => {
    alert('Seguro k deseas enviar los datos?');
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="form-container">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="Form"
        autoComplete="off"
      >
        <WizzardFormHeader FormTitlesArray={FormTitles} CurrentPage={page} />
        <WizzardFormBody CurrentPage={page} />
        <WizzarFormFooter
          handleSubmitForm={(event) => handleSubmit(event)}
          page={page}
          setPage={setPage}
        />
      </Form>
    </div>
  );
}
