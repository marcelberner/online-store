import React from "react";

import "./News.scss";

const News = (props) => {
  return (
    <div className="news">
      <div
        className={`news__image ${props.mediumSize && "news__image--medium"}`}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="news__title">{props.header}</div>
    </div>
  );
};

export default News;
