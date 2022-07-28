import FormButtons from "./FormButtons";
export default function WizzarFormFooter(props) {
  const { formState, formOneStatus, formTwoStatus, formThreeStatus } = props;
  return (
    <>
      <FormButtons
        formState={formState}
        page={props.page}
        setPage={props.setPage}
        handleSubmitForm={(event) => props.handleSubmitForm(event)}
        formOneStatus={formOneStatus}
        formTwoStatus={formTwoStatus}
        formThreeStatus={formThreeStatus}
      />
    </>
  );
}
