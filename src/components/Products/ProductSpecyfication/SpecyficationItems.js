import "./SpecyficationItems.scss";

const SpecyficationItems = (props) => {
  const specs = [];

  for (const key in props.spec) {
    specs.push({ name: key, value: props.spec[key] });
  }
  return (
    <div className="specyfication">
      {specs.map((spec) => (
        <div className="specyfication__item" key={Math.random()}>
          <span className="specyfication__name">{`${spec.name}:`}</span>
          <span className="specyfication__value">{spec.value}</span>
        </div>
      ))}
    </div>
  );
};

export default SpecyficationItems;
