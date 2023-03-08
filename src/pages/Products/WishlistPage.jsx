import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import ProductItem from "../../components/Products/ProductPreview/ProductItem";
import useData from "../../hooks/useData";

import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";
import LoadSpinner from "../../components/UI/LoadSpinner/LoadSpinner";

import "./WishlistPage.scss";

const WishlistPage = () => {
  const token = localStorage.getItem("token");

  const { getWishlist } = useData();

  const { data, isLoading } = useQuery({
    queryKey: "wishlist",
    queryFn: () => getWishlist(),
  });

  return (
    <section className="wishlist">
      <div className="wishlist__header">
        <h2 className="wishlist__text">Twoje listy zakupowe</h2>
      </div>
      <div className="wishlist__container">{token ? isLoading ? (
        <LoadSpinner />
      ) : data.length >= 1 ? (
        data &&
        data.map(
          (listItem) =>
            listItem !== undefined && (
              <ProductItem
                key={listItem._id}
                id={listItem._id}
                img={listItem.img}
                name={listItem.name}
                price={listItem.price}
                size={"small"}
              />
            )
        )
      ) : (
        <NoFoundHeader text={"Nie posiadasz żadnych produktów na liście"} />
      ) : <NoFoundHeader
      text={
        <>
          <Link to="/logowanie">
            <span className="nofound-header--link">Zaloguj się</span>
          </Link>
          , aby wyświetlić zawartość listy
        </>
      }
    />}</div>
    </section>
  );
};

export default WishlistPage;
