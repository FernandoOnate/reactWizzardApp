import SubmitButton from "./SubmitButton";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

export default function FormButtons(props) {
  return (
    <div className="form-buttons-container">
      <PreviousButton page={props.page} setPage={props.setPage} />
      {/* <SubmitButton /> */}
      <NextButton
        page={props.page}
        setPage={props.setPage}
        handleSubmitForm={(event) => props.handleSubmitForm(event)}
      />
    </div>
  );
}
