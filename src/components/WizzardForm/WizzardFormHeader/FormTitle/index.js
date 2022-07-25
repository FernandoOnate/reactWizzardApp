export default function FormTitle(props) {
    const { FormTitlesArray = [],CurrentPage=0 } = props;
    return (
      <div className="form-title-container">
        <h1 className="form-title">{FormTitlesArray[CurrentPage]}</h1>
      </div>
    );
}