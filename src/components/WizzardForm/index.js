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

  //this state variable contains the form data from the each input
  //esta variable contiene los datos de cada input del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
    lastname: "",
    phone: 0,
    fColor: "",
    fAnimal: "",
  });

  // this state variable contains the number of the current page
  // esta variable de estado contiene el número actual de la página
  const [page, setPage] = useState(0);

  // this state boolean variable contains the validation form status
  // esta variable contiene el estado de la validacion del formulario
  const [validated, setValidated] = useState(false);

  // this state variable allows to know if the form is validated so it can enable the next button
  // esta variable de estado nos permite deshabilitar o habiliar el botón de next
  const [allowNextButton, setAllowNextButton] = useState(false);

  // this arrow function handle the submit event when the submit button is pressed
  // esta funcion flecha controla el evento de submit cuando el botón de submit es enviado
  const handleSubmit = (event) => {
    alert("Seguro que deseas enviar los datos?");
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  // this arrow function disable the next button respect to error form state
  const desactivateNextButton = () => {};

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
        <WizzardFormBody
          CurrentPage={page}
          FormData={formData}
          onSetFormData={setFormData}
        />
        <WizzarFormFooter
          handleSubmitForm={(event) => handleSubmit(event)}
          page={page}
          setPage={setPage}
        />
      </Form>
    </div>
  );
}
