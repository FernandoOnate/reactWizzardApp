import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

export default function FormButtons(props) {
  const { formState, formOneStatus, formTwoStatus, formThreeStatus } = props;
  return (
    <div className="form-buttons-container">
      <PreviousButton page={props.page} setPage={props.setPage} />
      <NextButton
        formOneStatus={formOneStatus}
        formTwoStatus={formTwoStatus}
        formThreeStatus={formThreeStatus}
        page={props.page}
        setPage={props.setPage}
        handleSubmitForm={(event) => props.handleSubmitForm(event)}
        formState={formState}
      />
    </div>
  );
}
