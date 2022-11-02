import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./QuickSearch.scss";

const QuickSearch = () => {
  const navigate = useNavigate();
  const seekProduct = useRef();

  const searchProduct = (event) => {
    event.preventDefault();
    const currentValue = seekProduct.current.value;

    if (currentValue === "") return;

    navigate(`/products/search?q=${currentValue}`);
  };

  return (
    <div className="search__container">
      <form className="search__form">
        <input
          type="search"
          id="quickSearch"
          placeholder="Wyszukaj produkt..."
          className="search__input"
          ref={seekProduct}
        />
        <button className="search__button" onClick={searchProduct}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default QuickSearch;
