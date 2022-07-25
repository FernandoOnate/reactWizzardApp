import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function NextButton(props) {
  const { page, setPage, handleSubmitForm } = props;
  const [typeButton, setTypeButton] = useState('');
  const [textButton, setTextButton] = useState('');
  const [variantButton, setVariantButton] = useState(''); 
  const [showNextBehavior, setShowNextBehavior] = useState(null);

  const handleSubmit = (event) => {
    handleSubmitForm(event);
  }

  useEffect(() => {
    if (page === 2) {
      setVariantButton('success');
      setTextButton('Register');
      setTypeButton('submit');
      setShowNextBehavior(false);
    } else {
      setVariantButton ('primary');
      setTextButton('Next Page');
      setTypeButton("button");  
      setShowNextBehavior(true);
    }
  },[page]);

  const handleOnClickNextButton = () => {
    setPage((page) => page + 1);
  };
  return (
    <>
      <Button
        type={typeButton}
        onClick={(event)=>showNextBehavior ? handleOnClickNextButton() : handleSubmit(event)}
        className="next-button"
        variant={variantButton}
      >
        {textButton}
      </Button>
    </>
  );
}
