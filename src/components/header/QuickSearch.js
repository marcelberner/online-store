import React from "react";

import "./QuickSearch.scss";

const QuickSearch = () => {
  return (
    <div className="search__container">
      <form className="search__form">
        <input
          type="search"
          id="quickSearch"
          placeholder="Wyszukaj produkt..."
          className="search__input"
        />
        <button className="search__button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default QuickSearch;
