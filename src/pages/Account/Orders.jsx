import { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import useData from "../../hooks/useData";

import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";

import "./Orders.scss";

const Orders = () => {
  const userId = useSelector((state) => state.userAuth.userId);
  const [orders, setOrders] = useState();
  const { dataRequest } = useData();

  const getOrders = useCallback(async () => {
    const findOrder = await dataRequest({
      method: "GET",
      database: `orders/${userId}`,
    });

    const findProducts = await dataRequest({
      method: "GET",
      database: "products",
    });

    const formatOrders = findOrder.map((orders) => {
      const productNames = [];

      orders.products.forEach((product) => {
        const seekProduct = findProducts.find(
          (products) => products.id === product.productId
        );
        productNames.push(seekProduct.name);
      });

      return {
        date: orders.date,
        id: orders.id,
        status: orders.status,
        totalPrice: orders.totalPrice,
        products: productNames,
      };
    });

    setOrders(formatOrders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="orders">
      <div className="orders__container">
        {orders && orders.length > 0 ? (
          orders.map((order, index) => {
            return (
              <div className="orders__item" key={index}>
                <div className="orders__column">
                  <span className="orders__label">Numer zamówienia: </span>
                  <span>{order.id}</span>
                </div>
                <div className="orders__column">
                  <span className="orders__label">status:</span>
                  <span>
                    {order.status === "Pending" ? "W realizacji" : "Zakończony"}
                  </span>
                </div>
                <div className="orders__column">
                  <span className="orders__label">Zakupione produkty: </span>
                  <div className="orders__products">
                    {order.products &&
                      order.products.map((product, index) => {
                        return (
                          <span className="orders__product" key={index}>
                            {product}
                          </span>
                        );
                      })}
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
            );
          })
        ) : (
          <NoFoundHeader text={"Twoja historia zamówień jest pusta"} />
        )}
      </div>
    </section>
  );
};

export default Orders;
