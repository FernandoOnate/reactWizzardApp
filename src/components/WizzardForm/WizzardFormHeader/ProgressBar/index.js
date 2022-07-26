
export default function ProgressBarHeader(props) {
  const { currentPage } = props;
  
  return (
    <div className="progress-container">
      <span
        className="progress-bar"
        style={{
          width:
            currentPage === 0
              ? "33.33%"
              : currentPage === 1
              ? "66.66%"
              : currentPage === 2
              ? "99.99%"
              : "",
          backgroundColor:
            currentPage === 0
              ? "#246C99"
              : currentPage === 1
              ? "#249942"
              : currentPage === 2
              ? "#622499"
              : "",
        }}
      ></span>
    </div>
  );
}
