import { useNavigate } from "react-router-dom";

import "./NavItem.scss";

const NavItem = (props) => {
  const navigate = useNavigate();

  const categoryNavigate = () => {
    if (!props.isSelect) return;
    props.categoryHide();
    props.navHide();
    navigate(`/products/${props.path}`);
  };

  return (
    <li className="navigation__item" onClick={categoryNavigate}>
      {props.name}
    </li>
  );
};

export default NavItem;
