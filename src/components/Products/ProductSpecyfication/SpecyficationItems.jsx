import "./SpecyficationItems.scss";

const SpecyficationItems = (props) => {
  const specs = [];

  for (const key in props.spec) {
    specs.push({ name: key, value: props.spec[key] });
  }

  return (
    <div
      className={`specyfication ${
        props.size === "medium" && "specyfication--medium"
      } ${props.size === "large" && "specyfication--large"}`}
    >
      {specs.map((spec, index) => (
        <div
          className={`specyfication__item ${
            props.size === "medium" && "specyfication__item--medium"
          } ${props.size === "large" && "specyfication__item--large"}`}
          key={index}
        >
          <span
            className={`specyfication__name ${
              props.size === "medium" && "specyfication__name--medium"
            } ${props.size === "large" && "specyfication__name--large"}`}
          >{`${spec.name}:`}</span>
          <span
            className={`specyfication__value ${
              props.size === "medium" && "specyfication__value--medium"
            } ${props.size === "large" && "specyfication__value--large"}`}
          >
            {spec.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SpecyficationItems;
