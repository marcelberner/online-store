import { useQuery } from "react-query";

import useData from "../../hooks/useData";

import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";
import LoadSpinner from "../../components/UI/LoadSpinner/LoadSpinner";

import "./Orders.scss";

const Orders = () => {
  const { getOrders } = useData();

  const { data, isLoading } = useQuery({
    queryKey: "orders",
    queryFn: () => getOrders(),
  });

  return (
    <section className="orders">
      <div className="orders__container">
        {isLoading ? (
          <LoadSpinner />
        ) : data.length > 0 ? (
          data.map((order, index) => {
            return (
              <div className="orders__item" key={index}>
                <div className="orders__column">
                  <span className="orders__label">Numer zamówienia: </span>
                  <span>{order._id}</span>
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
                            {product.name}
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
