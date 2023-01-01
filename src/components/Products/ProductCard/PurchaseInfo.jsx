import "./PurchaseInfo.scss";

const PurchaseInfo = (props) => {
  return (
    <div className="purchase-info">
      <div className="purchase-info__icon">{props.icon}</div>
      <div className="purchase-info__text">
        <span>{props.text[0]}</span>
        <span>{props.text[1]}</span>
      </div>
    </div>
  );
};

export default PurchaseInfo;
