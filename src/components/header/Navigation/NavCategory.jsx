import NavItem from "./NavItem";

import "./NavCategory.scss";

const NavCategory = (props) => {
  return (
    <ul
      className={`navigation__category ${
        props.showState ? "navigation__category--show" : ""
      }`}
      onClick={() => {props.backdropHide(); props.navHide()}}
      onMouseEnter={props.backdropShow}
      onMouseLeave={props.backdropHide}
    >
      {props.links.map((link, index) => (
        <NavItem key={index} category={link.path} name={link.name} />
      ))}
    </ul>
  );
};

export default NavCategory;
