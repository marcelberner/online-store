import React from "react";
import News from "./News";

import "./Informations.scss";

const Informations = (props) => {
  return (
    <section className="informations">
      <h2 className="informations__header">{props.title}</h2>
      <div className="informations__content">
        {props.content.map((news) => (
          <News
            key={Math.random()}
            img={news.img}
            header={news.header}
            mediumSize={props.mediumSize ? props.mediumSize : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default Informations;
