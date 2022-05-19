import "./SelectPage.scss";

const SelectPage = (props) => {
  return (
    <div className="select-page">
      <button
        className={`select-page__button ${
          props.currentPage === 1 ? "select-page__button--hide" : ""
        }`}
        onClick={props.currentPage !== 1 && props.swapBackward}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <span className="select-page__current">{props.currentPage}</span>
      <button
        className={`select-page__button ${
          props.currentPage * 12 > props.productsLength
            ? "select-page__button--hide"
            : ""
        }`}
        onClick={
          props.currentPage * 12 <= props.productsLength && props.swapForward
        }
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default SelectPage;
