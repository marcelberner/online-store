import "./Informations.scss";

const Informations = (props) => {
  return (
    <section className="informations">
      <h2 className="informations__header">{props.title}</h2>
      <div className="informations__content">
        {props.content.map((news) => (
          <div key={Math.random()} className="news">
            <div
              className="news__image"
              style={{ backgroundImage: `url(${news.img})` }}
            ></div>
            <div className="news__title">{news.header}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Informations;
