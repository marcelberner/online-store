import React from "react";

import Hotshot from "./HotShot";
import RecomendedList from "./RecomendedList";

import "./Recomended.scss";

const Recomended = (props) => {
  return (
    <section className="recomended">
      {props.products && <Hotshot products={props.products}/>}
      {props.products && <RecomendedList products={props.products}/>}
    </section>
  );
};

export default Recomended;
