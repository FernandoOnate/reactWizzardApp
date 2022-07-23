import { useEffect, useState } from "react";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";
import { Form, Button } from "react-bootstrap";
import "./style.css";

export default function FormWizzard(props) {
  // const {}
  const FormTitles = ["Sign Up", "Personal Info", "Other Info"];
  const [page, setPage] = useState(0);
  const [type, setType] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastname: "",
    phone: 0,
    favoriteColor: "",
    favoriteAnimal: "",
  });
  //funciones

  const handleNextButton = () => {
    setPage((currentPage) => currentPage + 1);
  };
  const handlePrevButton = () => {
    setPage((currentPage) => currentPage - 1);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // alert("Le has dado en registrar!");
    const enviar = window.confirm("Desea enviar los datos?");
    if (enviar) {
      if (
        formData.email == "" ||
        formData.password == "" ||
        formData.confirmPassword == "" ||
        formData.name == "" ||
        formData.lastname == "" ||
        formData.phone == 0 ||
        formData.favoriteColor == "" ||
        formData.favoriteAnimal == ""
      ) {
        alert("Te faltaron datos por llenar");
      } else {
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
          lastname: "",
          phone: 0,
          favoriteColor: "",
          favoriteAnimal: "",
        });
        setPage(0);
      }
    } else {
      //validar que pasa cuando dice que no el usuario
    }
  };
  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo dataForm={formData} setDataForm={setFormData} currenPage={page}/>;
    } else if (page === 1) {
      return <PersonalInfo dataForm={formData} setDataForm={setFormData} />;
    } else if (page === 2) {
      return <OtherInfo dataForm={formData} setDataForm={setFormData} />;
    }
  };
  const [showFunctionNext, setShowFunctionNext] = useState(true);
  //use efect para cambiar el tipo de boton de next a submit
  useEffect(() => {
    if (page === 2) {
      setType("submit");
      setShowFunctionNext(false);
    } else {
      setType("button");
      setShowFunctionNext(true);
    }
    // setonClickBehavior((e)=>handleSubmitForm(e));
  }, [page]);

  return (
    <Form className="form">
      <div className="progress-bar">
        <span className="progress-bar-line"></span>
        <span className="progress-bar-text1">Sign in form</span>
        <span className="progress-bar-text2">Personal info form</span>
        <span className="progress-bar-text3">Other info form</span>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <Button
            onClick={handlePrevButton}
            disabled={page == 0}
            variant={page === 0? "secondary" : "primary"}
          >
            Previous
          </Button>{" "}
          <Button
            variant={type == "submit" ? "success" : "primary"}
            type={type}
            onClick={(e) => {
              showFunctionNext ? handleNextButton() : handleSubmitForm(e);
            }}
            // disabled={type===type}
          >
            {page === 2 ? "Send" : "Next"}
          </Button>{" "}
        </div>
      </div>
    </Form>
  );
}
