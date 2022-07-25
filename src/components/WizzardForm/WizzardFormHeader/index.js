import ProgressBar from "./ProgressBar";
import FormTitle from "./FormTitle";
export default function WizzardFormHeader(props) {
  const{FormTitlesArray = [], CurrentPage = 0} = props;
  return (
    <div className="form-header">
      <ProgressBar />
      <FormTitle FormTitlesArray={FormTitlesArray} CurrentPage={CurrentPage} />
    </div>
  );
}
