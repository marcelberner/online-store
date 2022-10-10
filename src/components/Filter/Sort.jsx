import { useState } from "react";

import "./Sort.scss";

const Sort = (props) => {
  const [sortState, setSortState] = useState(false);
  const [sort, setSort] = useState("domyslne");

  const sortOpenHandler = () => {
    setSortState((prevState) => !prevState);
  };

  const sortSelectHandler = (event) => {
    if(!sortState) return;
    
    const selectOption = event.target.dataset.option;

    setSort(selectOption);
    props.sortProduct(selectOption)
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
            sort === "domyslne" ? "option--selected" : ""
          }`}
          data-option="domyslne"
          onClick={sortSelectHandler}
        >
          Sortowanie domyślne
        </span>
        <span
          className={`option ${!sortState ? "option--hidden" : ""} ${
            sort === "cena_asc" ? "option--selected" : ""
          }`}
          data-option="cena_asc"
          onClick={sortSelectHandler}
        >
          Cena: od najtańszych
        </span>
        <span
          className={`option ${!sortState ? "option--hidden" : ""} ${
            sort === "cena_dsc" ? "option--selected" : ""
          }`}
          data-option="cena_dsc"
          onClick={sortSelectHandler}
        >
          Cena: od najdroższych
        </span>
        <span
          className={`option ${!sortState ? "option--hidden" : ""} ${
            sort === "ocena_asc" ? "option--selected" : ""
          }`}
          data-option="ocena_asc"
          onClick={sortSelectHandler}
        >
          Ocena: od najniższych
        </span>
        <span
          className={`option ${!sortState ? "option--hidden" : ""} ${
            sort === "ocena_dsc" ? "option--selected" : ""
          }`}
          data-option="ocena_dsc"
          onClick={sortSelectHandler}
        >
          Ocena: od najwyższych
        </span>
      </div>
    </div>
  );
};

export default Sort;
