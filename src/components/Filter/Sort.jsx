import { useState } from "react";

import "./Sort.scss";

const Sort = () => {
  const [sortState, setSortState] = useState(false);
  const [sort, setSort] = useState("najpopularniejsze");

  const sortOpenHandler = () => {
    setSortState((prevState) => !prevState);
  };

  const sortSelectHandler = (event) => {
    setSort(event.target.dataset.option);
  };

  return (
    <div className="sort">
      <div
        className="sort__select"
        onClick={sortOpenHandler}
        onMouseLeave={() => setSortState(false)}
      >
        <i
          className={`fa-solid fa-angle-down angle ${
            sortState ? "angle--active" : ""
          }`}
        ></i>
        <span className="select__label">Sortowanie</span>
        <span
          className={`option ${!sortState ? "option--hidden" : ""} ${
            sort === "najpopularniejsze" ? "option--selected" : ""
          }`}
          data-option="najpopularniejsze"
          onClick={sortSelectHandler}
        >
          Od najpopularniejszych
        </span>
        <span
          className={`option ${!sortState ? "option--hidden" : ""} ${
            sort === "najtansze" ? "option--selected" : ""
          }`}
          data-option="najtansze"
          onClick={sortSelectHandler}
        >
          Cena: od najtańszych
        </span>
        <span
          className={`option ${!sortState ? "option--hidden" : ""} ${
            sort === "najdrozszen" ? "option--selected" : ""
          }`}
          data-option="najdrozszen"
          onClick={sortSelectHandler}
        >
          Cena: od najdroższych
        </span>
      </div>
    </div>
  );
};

export default Sort;
