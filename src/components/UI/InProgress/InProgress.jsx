import ProgressIMG from "../../../assets/in-progress.png";

import "./InProgress.scss";

const InProgress = () => {
  return (
    <div className="inprogress">
      <img src={ProgressIMG} alt="in progress" className="inprogress__image"/>
    </div>
  );
};

export default InProgress;
