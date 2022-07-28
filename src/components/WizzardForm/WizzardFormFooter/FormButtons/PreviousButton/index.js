import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
export default function PreviousButton(props) {
  const { page, setPage } = props;
  const [disableButtonPrev, setDisableButtonPrev] = useState(null);

  useEffect(() => {
    {page === 0 ? setDisableButtonPrev(true) : setDisableButtonPrev(false);}
  },[page]);
  const handlePreviousButtonClick = () => {
    setPage((prev) => prev - 1);
  }
  return (
    <>
      <Button
        onClick={handlePreviousButtonClick}
        className="prev-button"
        disabled={disableButtonPrev}
      >
        Previous
      </Button>
    </>
  );
}
