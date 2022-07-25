import WizzardForm1 from "./WizzardForm1";
import WizzardForm2 from "./WIzzardForm2";
import WizzardForm3 from "./WIzzardForm3";
export default function WizzardFormBody(props) {
    const { CurrentPage=0 } = props;
    return (
      <div className="body-container">
        {CurrentPage === 0 ? (
          <WizzardForm1 />
        ) : CurrentPage === 1 ? (
          <WizzardForm2 />
        ) : CurrentPage === 2 ? (
          <WizzardForm3 />
        ) : (
          "Not page available"
        )}
      </div>
    );
}