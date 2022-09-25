import { useState, useEffect } from "react";
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

let lastPosition = 0;

const Navigation = (props) => {
  const resolution = useSelector((state) => state.window.resolution);

  const [backdropState, setBackdropState] = useState(false);
  const [navTimeout, setNavTimeout] = useState();

  const backdropShowHandler = () => {
    if (resolution <= 800) return;
    let timeout;

    timeout = setTimeout(() => {
      setBackdropState(true);
    }, 200);

    setNavTimeout(timeout);
  };

  const backdropHideHandler = () => {
    clearTimeout(navTimeout);
    setBackdropState(false);
  };

  useEffect(() => {
    if (resolution <= 800) props.navHide();
    else props.navShow();

    window.addEventListener("scroll", () => {
      if (resolution > 800) {
        if (window.scrollY < lastPosition) props.navShow();
        else props.navHide();

        lastPosition = window.scrollY;
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {backdropState && <Backdrop backdropClear={backdropHideHandler} />}
      <nav ref={props.navRef} className={`navigation`}>
        {categories.map((category, index) => (
          <NavCategory
            key={index}
            links={category}
            showState={backdropState}
            backdropShow={backdropShowHandler}
            backdropHide={backdropHideHandler}
            navHide={props.navHide}
          />
        ))}
      </nav>
    </>
  );
};

export default Navigation;
