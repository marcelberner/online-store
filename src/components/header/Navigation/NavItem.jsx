import { Link } from "react-router-dom";

import "./NavItem.scss";

const NavItem = (props) => {
  return (
    <Link to={`/products/${props.category}`}>
      <li className="navigation__item">{props.name}</li>
    </Link>
  );
};

export default NavItem;
