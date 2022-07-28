import WizzardForm1 from "./WizzardForm1";
import WizzardForm2 from "./WIzzardForm2";
import WizzardForm3 from "./WIzzardForm3";
export default function WizzardFormBody(props) {
  const {
    CurrentPage = 0,
    formData,
    onSetFormData,
    formOneStatus,
    setFormOneStatus,
    formTwoStatus,
    setFormTwoStatus,
    formThreeStatus,
    setFormThreeStatus,
  } = props;
  return (
    <div className="body-container">
      {CurrentPage === 0 ? (
        <WizzardForm1
          formData={formData}
          onSetFormData={onSetFormData}
          formOneStatus={formOneStatus}
          setFormOneStatus={setFormOneStatus}
        />
      ) : CurrentPage === 1 ? (
        <WizzardForm2
          formData={formData}
          onSetFormData={onSetFormData}
          formTwoStatus={formTwoStatus}
          setFormTwoStatus={setFormTwoStatus}
        />
      ) : CurrentPage === 2 ? (
        <WizzardForm3
          formData={formData}
          onSetFormData={onSetFormData}
          formThreeStatus={formThreeStatus}
          setFormThreeStatus={setFormThreeStatus}
        />
      ) : (
        "Not page available"
      )}
    </div>
  );
}
