import { useRef } from "react";
import { useSelector } from "react-redux";

import NavItem from "./NavItem";

import "./NavCategory.scss";

const NavCategory = (props) => {
  const resolution = useSelector((state) => state.window.resolution);

  const catRef = useRef(null);

  const selectCategory = () => {
    if (resolution > 800) {
      props.categoryHide();
      props.navHide();
    } else {
      props.setShowState(catRef.current);
    }
  };

  const enterCategory = () => {
    if (resolution <= 800) return;
    props.categoryShow(catRef.current);
  };

  const leaveCategory = () => {
    if (resolution <= 800) return;
    props.categoryHide();
  };

  return (
    <ul
      ref={catRef}
      className={`navigation__category ${
        props.categoryState === catRef.current
          ? "navigation__category--show"
          : ""
      }`}
      onClick={selectCategory}
      onMouseEnter={enterCategory}
      onMouseLeave={leaveCategory}
    >
      {props.categories.map((category, index) => (
        <NavItem
          key={index}
          path={category.path}
          name={category.name}
          isSelect={props.categoryState === catRef.current}
          categoryHide={props.categoryHide}
          navHide={props.navHide}
        />
      ))}
    </ul>
  );
};

export default NavCategory;
