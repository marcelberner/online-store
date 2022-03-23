import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__content">
        <ul className="navigation__item">
          <li className="list__item list__item--show">Laptopy</li>
          <li className="list__item list__item--hide">Laptopy 2w1</li>
          <li className="list__item list__item--hide">Tablety</li>
          <li className="list__item list__item--hide">Czytniki e-book</li>
          <li className="list__item list__item--hide">Podstawki chłodzące</li>
          <li className="list__item list__item--hide">Baterie do laptopów</li>
          <li className="list__item list__item--hide">Etui do laptopów</li>
        </ul>
        <ul className="navigation__item">
          <li className="list__item list__item--show">Komputery</li>
          <li className="list__item list__item--hide">Komputery stacionarne</li>
          <li className="list__item list__item--hide">Komputery All-In-One</li>
          <li className="list__item list__item--hide">Komputery Mini PC</li>
          <li className="list__item list__item--hide">Monitory</li>
        </ul>
        <ul className="navigation__item">
          <li className="list__item list__item--show">Podzespoły komputerowe</li>
          <li className="list__item list__item--hide">Dyski SSD</li>
          <li className="list__item list__item--hide">Dyski Twarde</li>
          <li className="list__item list__item--hide">Karty graficzne</li>
          <li className="list__item list__item--hide">Procesory</li>
          <li className="list__item list__item--hide">Pamięć RAM</li>
          <li className="list__item list__item--hide">Obudowy</li>
          <li className="list__item list__item--hide">Płyty główne</li>
          <li className="list__item list__item--hide">Zasilacze</li>
        </ul>
        <ul className="navigation__item">
          <li className="list__item list__item--show">Gaming</li>
          <li className="list__item list__item--hide">Playstation</li>
          <li className="list__item list__item--hide">Xbox</li>
          <li className="list__item list__item--hide">Gry komputerowe</li>
          <li className="list__item list__item--hide">Gamepady</li>
          <li className="list__item list__item--hide">Gogle VR</li>
        </ul>
        <ul className="navigation__item">
          <li className="list__item list__item--show">Smartfony i smartwatche</li>
          <li className="list__item list__item--hide">IOS</li>
          <li className="list__item list__item--hide">Android</li>
          <li className="list__item list__item--hide">Smartwatche</li>
          <li className="list__item list__item--hide">Pulsometry</li>
          <li className="list__item list__item--hide">Etui na telefon</li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navigation;
