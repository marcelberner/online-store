import "./Sort.scss";

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__view">
        <i className="fa-solid fa-angle-down angle"></i>
        <i className="fa-solid fa-table-cells"></i>
        <i className="fa-solid fa-table-list"></i>
      </div>
      <div className="sort__select">
        <i className="fa-solid fa-angle-down angle"></i>
        <span className="select__label">Sortowanie</span>
        <span className="option">Od najpopularniejszych</span>
        <span className="option option--hidden">Cena: od najtańszych</span>
        <span className="option option--hidden">Cena: od najdroższych</span>
      </div>
    </div>
  );
};

export default Sort;
