import React from "react";
import { Button} from "react-bootstrap";
export default function PreviousButton(props) {
  const { page, setPage } = props;
  
  const handlePreviousButtonClick = () => {
    {page===0?setPage(2):setPage(page => page - 1);} 
  }
  return (
    <>
      <Button onClick={handlePreviousButtonClick}className="prev-button">Previous</Button>
    </>
  );
}
