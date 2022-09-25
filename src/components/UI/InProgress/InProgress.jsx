import ProgressIMG from "../../../assets/in-progress.png";

import "./InProgress.scss";

const InProgress = () => {
  return (
    <div className="inprogress">
      <h1 className="inprogress__text">Ta strona jest w czasie remontu</h1>
      <img src={ProgressIMG} alt="in progress" className="inprogress__image"/>
    </div>
  );
};

export default InProgress;
