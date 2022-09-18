import "./SelectPage.scss";

const SelectPage = (props) => {
  return (
    <div className="select-page">
      <button
        className={`select-page__button select-page__button-left ${
          props.currentPage === 1 ? "select-page__button--hide" : ""
        }`}
        onClick={props.swapBackward}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <span className="select-page__current">{props.currentPage}</span>
      <button
        className={`select-page__button select-page__button--right ${
          props.currentPage * 12 > props.productsLength
            ? "select-page__button--hide"
            : ""
        }`}
        onClick={props.swapForward}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default SelectPage;
