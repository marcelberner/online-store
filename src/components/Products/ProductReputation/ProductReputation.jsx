import "./ProductReputation.scss";

const ProductReputation = (props) => {
    const totalRep = [];

    if(props.rep){
        const productRep = props.rep.split(".");
        
        if (parseInt(productRep[0]) >= 1) {
            for (let i = 0; i < parseInt(productRep[0]); i++) {
            totalRep.push({ star: "full" });
            }
        }
        if (parseInt(productRep[1]) >= 5) totalRep.push({ star: "half" });
    }
    
  return (
    <div className={`product-reputation ${props.size === 'medium' && "product-reputation--medium"}`}>
        {totalRep.map((rep) => {
        if (rep.star === "full")
            return (<i className="fa-solid fa-star product-reputation__stars" key={Math.random()}></i>);
        else if (rep.star === "half")
            return (<i className="fa-solid fa-star-half product-reputation__stars" key={Math.random()}></i>);
        else return "";
        })}
        <span className="product-reputation__text">{`(${props.rep})`}</span>
    </div>
  );
};

export default ProductReputation;