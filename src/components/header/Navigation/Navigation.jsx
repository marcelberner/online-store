import { useState } from "react";
import { useSelector } from "react-redux";

import NavCategory from "./NavCategory";
import Backdrop from "../../UI/Backdrop/Backdrop";

import "./Navigation.scss";

const categories = [
  [
    {
      name: "Laptopy",
      path: "laptopy",
    },
    {
      name: "Laptopy 2w1",
      path: "laptopy-2w1",
    },
    {
      name: "Tablety",
      path: "tablety",
    },
    {
      name: "Czytniki e-book",
      path: "czytniki-e-book",
    },
    {
      name: "Podstawki chłodzące",
      path: "podstawki-chłodzące",
    },
    {
      name: "Baterie do laptopów",
      path: "baterie-do-laptopów",
    },
    {
      name: "Etui do laptopów",
      path: "etui-do-laptopów",
    },
  ],
  [
    {
      name: "Komputery",
      path: "komputery",
    },
    {
      name: "Komputery stacjonarne",
      path: "komputery-stacjonarne",
    },
    {
      name: "Komputery All-In-One",
      path: "komputery-all-in-one",
    },
    {
      name: "Komputery Mini PC",
      path: "komputery-mini-pc",
    },
    {
      name: "Monitory",
      path: "monitory",
    },
  ],
  [
    {
      name: "Podzespoły komputerowe",
      path: "podzespoły-komputerowe",
    },
    {
      name: "Dyski SSD",
      path: "dyski-ssd",
    },
    {
      name: "Dyski Twarde",
      path: "dyski-twarde",
    },
    {
      name: "Karty graficzne",
      path: "karty-graficzne",
    },
    {
      name: "Procesory",
      path: "procesory",
    },
    {
      name: "Pamięć RAM",
      path: "pamięć-ram",
    },
    {
      name: "Obudowy",
      path: "obudowy",
    },
    {
      name: "Płyty główne",
      path: "płyty-główne",
    },
    {
      name: "Zasilacze",
      path: "zasilacze",
    },
  ],
  [
    {
      name: "Gaming",
      path: "gaming",
    },
    {
      name: "Playstation",
      path: "playstation",
    },
    {
      name: "Xbox",
      path: "xbox",
    },
    {
      name: "Gry komputerowe",
      path: "gry-komputerowe",
    },
    {
      name: "Gamepady",
      path: "gamepady",
    },
    {
      name: "Gogle VR",
      path: "gogle-vr",
    },
  ],
  [
    {
      name: "Smartfony i smartwatche",
      path: "smartfony-i-smartwatche",
    },
    {
      name: "IOS",
      path: "ios",
    },
    {
      name: "Android",
      path: "android",
    },
    {
      name: "Smartwatche",
      path: "smartwatche",
    },
    {
      name: "Pulsometry",
      path: "pulsometry",
    },
    {
      name: "Etui na telefon",
      path: "etui-na-telefon",
    },
  ],
];

const Navigation = (props) => {
  const resolution = useSelector((state) => state.window.resolution);

  const [categoryState, setCategoryState] = useState(false);
  const [categoryTimeout, setCategoryTimeout] = useState();

  const categoryShowHandler = (catRef) => {
    if (resolution > 800) {
      let timeout;

      timeout = setTimeout(() => {
        setCategoryState(catRef);
      }, 200);

      setCategoryTimeout(timeout);
    }
  };

  const categoryHideHandler = () => {
    if (resolution > 800) clearTimeout(categoryTimeout);
    setCategoryState(false);
  };

  return (
    <>
      {categoryState && resolution > 800 && <Backdrop backdropClear={categoryHideHandler} />}
      <nav ref={props.navRef} className="navigation">
        {categories.map((categories, index) => (
          <NavCategory
            key={index}
            categories={categories}
            categoryState={categoryState}
            setShowState={setCategoryState}
            categoryShow={categoryShowHandler}
            categoryHide={categoryHideHandler}
            navHide={props.navHide}
          />
        ))}
      </nav>
    </>
  );
};

export default Navigation;
