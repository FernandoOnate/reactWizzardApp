import FormButtons from './FormButtons';
export default function WizzarFormFooter(props) {
  return (
    <>
      <FormButtons
        page={props.page}
        setPage={props.setPage}
        handleSubmitForm={(event) => props.handleSubmitForm(event)}
      />
    </>
  );
}
