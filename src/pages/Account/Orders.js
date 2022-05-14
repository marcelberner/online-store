import { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import useData from "../../hooks/useData";

import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";

import "./Orders.scss";

const Orders = () => {
  const token = useSelector((state) => state.userAuth.token);
  const [orders, setOrders] = useState();
  const [products, setProducts] = useState();
  const { dataRequest } = useData();

  const getOrders = useCallback(async () => {
    const findOrder = await dataRequest({ method: "GET", database: "orders" });
    const findProducts = await dataRequest({
      method: "GET",
      database: "products",
    });

    const correctOrders = findOrder.filter((order) => order.userId === token);

    setOrders(correctOrders);

    const orderProducts = [];

    correctOrders.forEach((order) => {
      const productName = [];

      for (let i = 0; i < order.products.length; i++) {
        const product = findProducts.find(
          (product) => product.id === order.products[i].productId
        );

        productName.push(product.name);
      }

      orderProducts.push(productName);
    });

    setProducts(orderProducts);
  }, [dataRequest, token]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <section className="orders">
      <div className="orders__container">
        {orders && orders.length > 0 ? (
          orders.map((order, index) => (
            <div className="orders__item" key={index}>
              <div className="orders__column">
                <span className="orders__label">Numer zamówienia: </span>
                <span>{order.id}</span>
              </div>
              <div className="orders__column">
                <span className="orders__label">status:</span>
                <span>
                  {order.status === "pending" ? "W realizacji" : "Zakończony"}
                </span>
              </div>
              <div className="orders__column">
                <span className="orders__label">Zakupione produkty: </span>
                <div className="orders__products">
                  {products &&
                    products[index].map((product, index) => (
                      <span className="orders__product" key={index}>
                        {product}
                      </span>
                    ))}
                </div>
              </div>
              <div className="orders__column">
                <span className="orders__label">Wartość zamówienia:</span>
                <span>{order.totalPrice} zł</span>
              </div>
              <div className="orders__column orders__column--last">
                <span className="orders__label">Data: </span>
                <span>{order.date}</span>
              </div>
            </div>
          ))
        ) : (
          <NoFoundHeader text={"Twoja historia zamówień jest pusta"}/>
        )}
      </div>
    </section>
  );
};

export default Orders;
