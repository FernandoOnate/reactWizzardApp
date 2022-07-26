import WizzardForm1 from "./WizzardForm1";
import WizzardForm2 from "./WIzzardForm2";
import WizzardForm3 from "./WIzzardForm3";
export default function WizzardFormBody(props) {
  const {
    CurrentPage = 0,
    FormData,
    onSetFormData,
    formOneInputOneValid,
    onSetFormOneInputOneValid,
    formOneInputOneInvalid,
    onSetFormOneInputOneInvalid,
  } = props;
  return (
    <div className="body-container">
      {CurrentPage === 0 ? (
        <WizzardForm1
          formOneInputOneValid={formOneInputOneValid}
          onSetFormOneInputOneValid={onSetFormOneInputOneValid}
          formOneInputOneInvalid={formOneInputOneInvalid}
          onSetFormOneInputOneInvalid={onSetFormOneInputOneInvalid}
          formOneData={FormData}
          onSetFormOneData={onSetFormData}
        />
      ) : CurrentPage === 1 ? (
        <WizzardForm2 formTwoData={FormData} onSetFormTwoData={onSetFormData} />
      ) : CurrentPage === 2 ? (
        <WizzardForm3
          formThreeData={FormData}
          onSetFormThreeData={onSetFormData}
        />
      ) : (
        "Not page available"
      )}
    </div>
  );
}
