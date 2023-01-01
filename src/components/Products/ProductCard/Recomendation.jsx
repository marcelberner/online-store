import "./Recomendation.scss";

const Recomendation = (props) => {
  return (
    <div className="recomendation">
      <div className="recomendation__header">
        <span>Rekomendacja eksperta</span>
      </div>
      <span className="recomendation__text">{props.text}</span>
    </div>
  );
};

export default Recomendation;
