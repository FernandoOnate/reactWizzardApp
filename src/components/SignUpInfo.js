import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import FormWizzard from "./FormWizzard";
function SignUpInfo({ dataForm, setDataForm }) {
  //variables para este formulario
  //inputs variables for this form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //===================================

  //error de las variables de este formulario
  //variables errors for this form
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  //====================================

  //variable de error para el formulario en general
  //error variable for all the form in general
  const [formError, setFormError] = useState(false);
  const [pageOneError, setPageOneError] = useState(false);
  const [keyPressed, setKeyPressed] = useState(false);
  //==================================
  //con este hook de efecto, valido que el objeto con los datos del form no estén vacios una vez que todo el componente es renderizado
  //this useEffect validates if the data user object is empty for this form once the entire component is rendered
  useEffect(() => {
    {
      dataForm.email === ""
        ? setErrorEmail(true) && setPageOneError(true)
        : setErrorEmail(false) && setPageOneError(false);
    }
    {
      dataForm.password === ""
        ? setErrorPassword(true) && setPageOneError(true)
        : setErrorPassword(false) && setPageOneError(false);
    }
    {
      dataForm.confirmPassword === ""
        ? setErrorConfirmPassword(true) && setPageOneError(true)
        : setErrorConfirmPassword(false) && setPageOneError(false);
    }
  }, []);
  //===============================

  //con este useEffect valido los inputs cada vez que alguno de ellos cambia su valor
  //this useEffect validates the inputs value each time they change
  useEffect(() => {
    //valida la longitud del email
    //validate the email length
    {
      !email.length ? setErrorEmail(true) : setErrorEmail(false);
    }
    //================================

    //se valida la longitud de la contraseña
    //validate the password length
    {
      !password.length ? setErrorPassword(true) : setErrorPassword(false);
    }
    //================================

    //se valida la longitud de la confirmación de la contraseña
    //validate the confirm password length
    {
      !confirmPassword.length
        ? setErrorConfirmPassword(true)
        : setErrorConfirmPassword(false);
    }
    //================================

    //valida si hay algún input con error y asigna error al formulario general
    //validates if there is any input error and puts the error form in general on true
    {
      !email.length || !password.length || !confirmPassword.length
        ? setFormError(true) && setPageOneError(true)
        : setFormError(false);
    }
    //================================
    {
      dataForm.email === ""
        ? setErrorEmail(true) && setPageOneError(true)
        : setErrorEmail(false);
    }
    {
      dataForm.password === ""
        ? setErrorPassword(true) && setPageOneError(true)
        : setErrorPassword(false);
    }
    {
      dataForm.confirmPassword === ""
        ? setErrorConfirmPassword(true) && setPageOneError(true)
        : setErrorConfirmPassword(false);
    }
    // <FormWizzard emailError={errorEmail}/>

    console.log("error del email:" + errorEmail);
    console.log("error de la contraseña:" + errorPassword);
    console.log("error del formulario:" + formError);
    console.log("error de la pagina:" + formError);
  }, [email, password, confirmPassword,keyPressed]);

  return (
    <div className="sign-up-container">
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={dataForm.email}
          placeholder="Your email"
          onChange={(event) => {
            setEmail(event.target.value);
            setDataForm({ ...dataForm, email: event.target.value });
          }}
          required
          onKeyDown={(e) => setKeyPressed(e.key)}
        />
        {
          <Form.Text className="text-muted">
            {errorEmail
              ? "El email no puede estar vacío / email input is empty"
              : ""}
          </Form.Text>
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={dataForm.password}
          placeholder="Your password"
          onChange={(event) => {
            setPassword(event.target.value);
            setDataForm({ ...dataForm, password: event.target.value });
          }}
          required
          onKeyDown={(e) => setKeyPressed(e.key)}
        />
        {
          <Form.Text className="text-muted">
            {errorPassword
              ? "La contraseña no puede estar vacía / password input is required"
              : ""}
          </Form.Text>
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmpassword">
        <Form.Label>Confirm password:</Form.Label>
        <Form.Control
          type="password"
          value={dataForm.confirmPassword}
          placeholder="your password again"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            setDataForm({ ...dataForm, confirmPassword: event.target.value });
          }}
          required
          onKeyDown={(e) => setKeyPressed(e.key)}
        />
        {
          <Form.Text className="text-muted">
            {errorConfirmPassword
              ? "Este campo no puede estar vacío / this input is required"
              : ""}
          </Form.Text>
        }
      </Form.Group>
    </div>
  );
}

export default SignUpInfo;
