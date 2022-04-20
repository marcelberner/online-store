import { useSelector } from "react-redux";

import ProductItem from "../../components/Products/ProductPreview/ProductItem";

import "./WishlistPage.scss";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.userData.wishlistProducts);
  const isLogged = useSelector((state) => state.userAuth.token);

  const showWishlist = () => {
    if (isLogged)
      return wishlistItems.length >= 1 ? (
        wishlistItems.map(
          (listIten) =>
            listIten !== undefined && (
              <ProductItem
                key={listIten.id}
                id={listIten.id}
                img={listIten.img}
                name={listIten.name}
                price={listIten.price}
                size={"small"}
              />
            )
        )
      ) : (
        <h3>Nie posiadasz żadnych produktów na liście</h3>
      );
    else if (!isLogged)
      return <h3>Zaloguj się aby wyświetlić zawartość listy</h3>;
  };

  console.log(wishlistItems);
  return (
    <section className="wishlist">
      <div className="wishlist__container">{showWishlist()}</div>
    </section>
  );
};

export default WishlistPage;
