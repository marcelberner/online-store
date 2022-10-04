import { Link } from "react-router-dom";

import "./News.scss";

const News = (props) => {
  return (
    <Link to={`/news`}>
      <div className="news">
        <div
          className={`news__image ${props.mediumSize && "news__image--medium"}`}
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div className="news__title">{props.header}</div>
      </div>
    </Link>
  );
};

export default News;
