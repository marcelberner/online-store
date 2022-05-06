import { useSelector } from "react-redux";

import CartItem from "../../components/Cart/CartItem/CartItem";

import "./Sumarry.scss";

const Sumarry = () => {
  const totalPrice = useSelector((state) => state.orderData.totalPrice);
  const customerData = useSelector((state) => state.orderData.customerData);
  const paymentMethod = useSelector((state) => state.orderData.paymentMethod);
  const deliveryMethod = useSelector((state) => state.orderData.deliveryMethod);
  const orderProducts = useSelector((state) => state.orderData.products);
  const cart = useSelector((state) => state.userData.cart);

  return (
    <div className="summary">
      <div className="summary__container">
        <h2 className="summary__title">Zamawiane produkty:</h2>
        {orderProducts &&
          orderProducts.map((product, index) => (
            <CartItem
              key={index}
              img={product.img}
              name={product.name}
              amount={cart[index] && cart[index].amount}
              compact={true}
            />
          ))}
          <div className="summary__totalprice">
            <span>Do zapłaty: {totalPrice} zł</span>
          </div>
      </div>
      <div className="summary__container">
        <h2 className="summary__title">Dane odbiorcy:</h2>
        <span className="summary__text">{customerData.name} {customerData.surname}</span>
        <span className="summary__text">{customerData.street}</span>
        <span className="summary__text">{customerData.zipcode} {customerData.city}</span>
        <span className="summary__text">{customerData.email}</span>
        <span className="summary__text">{customerData.phone}</span>
      </div>
      <div className="summary__container">
        <h2 className="summary__title">Dostawa i płatność:</h2>
        <span className="summary__label">Sposób dostawy:</span>
        <span className="summary__text">{deliveryMethod}</span>
        <span className="summary__label">Metoda płatności:</span>
        <span className="summary__text">{paymentMethod}</span>
      </div>
    </div>
  );
};

export default Sumarry;
