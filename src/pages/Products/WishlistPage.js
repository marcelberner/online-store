import { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductItem from "../../components/Products/ProductPreview/ProductItem";
import useData from "../../hooks/useData";

import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";

import "./WishlistPage.scss";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.userData.wishlist);
  const isLogged = useSelector((state) => state.userAuth.token);

  const [wishProducts, setWishProducts] = useState(null);

  const { dataRequest } = useData();

  const findWishProducts = useCallback(async () => {
    const products = await dataRequest({ method: "GET", database: "products" });

    setWishProducts(
      products.filter((product) => {
        let isCorrect = false;

        wishlistItems.forEach((element) => {
          if (element.productId === product.id) isCorrect = true;
        });

        if (isCorrect) return product;
      })
    );
  }, [dataRequest, wishlistItems]);

  useEffect(() => {
    findWishProducts();
  }, [findWishProducts]);

  const showWishlist = () => {
    if (isLogged)
      return wishlistItems.length >= 1 ? (
        wishProducts &&
          wishProducts.map(
            (listItem) =>
              listItem !== undefined && (
                <ProductItem
                  key={listItem.id}
                  id={listItem.id}
                  img={listItem.img}
                  name={listItem.name}
                  price={listItem.price}
                  size={"small"}
                />
              )
          )
      ) : (
        <NoFoundHeader text={"Nie posiadasz żadnych produktów na liście"} />
      );
    else if (!isLogged)
      return (
        <NoFoundHeader
          text={
            <>
              <Link to="/logowanie">
                <span className="nofound-header--link">Zaloguj się</span>
              </Link>
              , aby wyświetlić zawartość listy
            </>
          }
        />
      );
  };

  return (
    <section className="wishlist">
      <div className="wishlist__header">
        <h2 className="wishlist__text">Twoje listy zakupowe</h2>
      </div>
      <div className="wishlist__container">{showWishlist()}</div>
    </section>
  );
};

export default WishlistPage;
