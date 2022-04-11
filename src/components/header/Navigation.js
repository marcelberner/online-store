import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__content">
        <ul className="navigation__item">
          <Link  to={`/products/laptopy`}>
            <li className="list__item list__item--show">Laptopy</li>
          </Link>
          <Link  to={`/products/laptopy-2w1`}>
            <li className="list__item list__item--hide">Laptopy 2w1</li>
          </Link>
          <Link  to={`/products/tablety`}>
            <li className="list__item list__item--hide">Tablety</li>
          </Link>
          <Link  to={`/products/czytniki-e-book`}>
            <li className="list__item list__item--hide">Czytniki e-book</li>
          </Link>
          <Link  to={`/products/podstawki-chłodzące`}>
            <li className="list__item list__item--hide">Podstawki chłodzące</li>
          </Link>
          <Link  to={`/products/baterie-do-laptopów`}>
            <li className="list__item list__item--hide">Baterie do laptopów</li>
          </Link>
          <Link  to={`/products/etui-do-laptopów`}>
            <li className="list__item list__item--hide">Etui do laptopów</li>
          </Link>
        </ul>
        <ul className="navigation__item">
          <Link  to={`/products/komputery`}>
            <li className="list__item list__item--show">Komputery</li>
          </Link>
          <Link  to={`/products/komputery-stacionarne`}>
            <li className="list__item list__item--hide">
              Komputery stacionarne
            </li>
          </Link>
          <Link  to={`/products/komputery-all-in-one`}>
            <li className="list__item list__item--hide">
              Komputery All-In-One
            </li>
          </Link>
          <Link  to={`/products/komputery-mini-pc`}>
            <li className="list__item list__item--hide">Komputery Mini PC</li>
          </Link>
          <Link  to={`/products/monitory`}>
            <li className="list__item list__item--hide">Monitory</li>
          </Link>
        </ul>
        <ul className="navigation__item">
          <Link  to={`/products/podzespoły-komputerowe`}>
            <li className="list__item list__item--show">
              Podzespoły komputerowe
            </li>
          </Link>
          <Link  to={`/products/dyski-ssd`}>
            <li className="list__item list__item--hide">Dyski SSD</li>
          </Link>
          <Link  to={`/products/dyski-twarde`}>
            <li className="list__item list__item--hide">Dyski Twarde</li>
          </Link>
          <Link  to={`/products/karty-graficzne`}>
            <li className="list__item list__item--hide">Karty graficzne</li>
          </Link>
          <Link  to={`/products/procesory`}>
            <li className="list__item list__item--hide">Procesory</li>
          </Link>
          <Link  to={`/products/pamięć-ram`}>
            <li className="list__item list__item--hide">Pamięć RAM</li>
          </Link>
          <Link  to={`/products/obudowy`}>
            <li className="list__item list__item--hide">Obudowy</li>
          </Link>
          <Link  to={`/products/płyty-główne`}>
            <li className="list__item list__item--hide">Płyty główne</li>
          </Link>
          <Link  to={`/products/zasilacze`}>
            <li className="list__item list__item--hide">Zasilacze</li>
          </Link>
        </ul>
        <ul className="navigation__item">
          <Link  to={`/products/gaming`}>
            <li className="list__item list__item--show">Gaming</li>
          </Link>
          <Link  to={`/products/playstation`}>
            <li className="list__item list__item--hide">Playstation</li>
          </Link>
          <Link  to={`/products/xbox`}>
            <li className="list__item list__item--hide">Xbox</li>
          </Link>
          <Link  to={`/products/gry-komputerowe`}>
            <li className="list__item list__item--hide">Gry komputerowe</li>
          </Link>
          <Link  to={`/products/gamepady`}>
            <li className="list__item list__item--hide">Gamepady</li>
          </Link>
          <Link  to={`/products/gogle-vr`}>
            <li className="list__item list__item--hide">Gogle VR</li>
          </Link>
        </ul>
        <ul className="navigation__item">
          <Link  to={`/products/smartfony-i-smartwatche`}>
            <li className="list__item list__item--show">
              Smartfony i smartwatche
            </li>
          </Link>
          <Link  to={`/products/ios`}>
            <li className="list__item list__item--hide">IOS</li>
          </Link>
          <Link  to={`/products/android`}>
            <li className="list__item list__item--hide">Android</li>
          </Link>
          <Link  to={`/products/smartwatche`}>
            <li className="list__item list__item--hide">Smartwatche</li>
          </Link>
          <Link  to={`/products/pulsometry`}>
            <li className="list__item list__item--hide">Pulsometry</li>
          </Link>
          <Link  to={`/products/etui-na-telefon`}>
            <li className="list__item list__item--hide">Etui na telefon</li>
          </Link>
        </ul>
      </ul>
    </nav>
  );
};

export default Navigation;
