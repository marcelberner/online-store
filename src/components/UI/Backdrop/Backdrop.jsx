import ReactDOM from "react-dom";

import "./Backdrop.scss";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.backdropClear} />,
    document.getElementById("backdrop-root")
  );
};

export default Backdrop;
