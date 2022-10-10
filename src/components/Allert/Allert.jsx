import ReactDOM from "react-dom";

import "./Allert.scss";

const Allert = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`allert ${
            props.type === "succes" ? "allert--succes" : "allert--fail"
          }`}
        >
          {props.type === "succes" ? (
            <i className="fa-sharp fa-solid fa-circle-check"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
          )}
          {props.text}
        </div>,
        document.getElementById("allert-root")
      )}
    </>
  );
};

export default Allert;
