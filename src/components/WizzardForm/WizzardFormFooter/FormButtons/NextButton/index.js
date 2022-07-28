import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function NextButton(props) {
  const {
    page,
    setPage,
    handleSubmitForm,
    formOneStatus,
    formTwoStatus,
    formThreeStatus,
  } = props;

  const [typeButton, setTypeButton] = useState("");
  const [textButton, setTextButton] = useState("");
  const [variantButton, setVariantButton] = useState("");
  const [goNextPage, setGoNextPage] = useState(null);
  const [nexButtonStatus, setNextButtonStatus] = useState(null);

  useEffect(() => {
    if (page === 0 && formOneStatus) {
      setNextButtonStatus(false);
    } else if (page === 1 && formTwoStatus) {
      setNextButtonStatus(false);
    } else if (page === 2 && formThreeStatus) {
      setNextButtonStatus(false);
    } else {
      setNextButtonStatus(true);
    }
  }, [formOneStatus, page, formTwoStatus, formThreeStatus]);

  useEffect(() => {
    if (page === 2) {
      setVariantButton("success");
      setTextButton("Register");
      setTypeButton("submit");
      setGoNextPage(false);
    } else {
      setVariantButton("primary");
      setTextButton("Next Page");
      setTypeButton("button");
      setGoNextPage(true);
    }
  }, [page]);

  const handleOnClickNextButton = () => {
    if (page === 0 && !formOneStatus) {
      alert("Form 1 error: this action is not allowed");
    } else if (page === 1 && !formTwoStatus) {
      alert("Form 2 error: this action is not allowed");
    } else if (page === 2 && formThreeStatus) {
      alert("Form 3 error: this action is not allowed");
    } else {
      setPage((page) => page + 1);
    }
  };
  const handleSubmit = (event) => {
    handleSubmitForm(event);
  };
  return (
    <>
      <Button
        type={typeButton}
        onClick={(event) =>
          goNextPage ? handleOnClickNextButton() : handleSubmit(event)
        }
        className="next-button"
        variant={variantButton}
        disabled={nexButtonStatus}
      >
        {textButton}
      </Button>
    </>
  );
}
