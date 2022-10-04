import Hotshot from "./HotShot";
import RecomendedList from "./RecomendedList";

import LoadSpinner from "../UI/LoadSpinner/LoadSpinner";

import "./Recomended.scss";

const Recomended = (props) => {
  return (
    <section className="recomended">
      {props.products ? <Hotshot products={props.products}/> : <LoadSpinner />}
      {props.products ? <RecomendedList products={props.products}/> : <LoadSpinner />}
    </section>
  );
};

export default Recomended;
