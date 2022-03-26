import Slider from "../../components/slider/Slider";
import Recomended from "../../components/recomended/Recomended";
import Informations from "../../components/Informations/Informations";
import LastWatched from "../../components/last_watched/LastWatched";

import "./HomePage.scss";

const HomePage = () => {
  const news = [
    {
      header: "PC Game Pass z rabatem 33% przy zakupie akcesoriów gamingowych",
      img: "./images/gamepass_news.png",
    },
    {
      header: "Pokaż, jak trenujesz ze sprzętem elektronicznym i zgarnij smartwatch Samsung",
      img: "./images/smartwatch_news.png",
    },
    {
      header: "Kup Samsung Galaxy Tab S8 i odbierz voucher o wartości 300 zł na kolejne zakupy",
      img: "./images/galaxytab_news.png",
    },
    {
      header: "Weź udział w wyścigach Formuly X i wygraj atrakcyjne nagrody",
      img: "./images/formula_news.png",
    },
  ];

  const info = [
    {
      header: "Łatwe i wygodne zakupy online. Jak pestka.",
      img: "./images/latwe_zakupy.svg",
    },
    {
      header: "Konkurencyjne ceny. Bez ściemy. I z rytmem",
      img: "./images/dobra_cena.svg",
    },
    {
      header: "30 produktów w ofercie. Co tu więcej pisać?",
      img: "./images/30_produktow.svg",
    },
    {
      header: "Ponad 2 klientów nie może się mylić",
      img: "./images/3_klientow.svg",
    },
    {
      header: "Szybka dostawa w wielu opcjach",
      img: "./images/szybka_dostawa.svg",
    },
  ];

  const tutorials = [
    {
      header: "Tablet graficzny. Modele dla początkujących i zaawansowanych",
      img: "./images/tablet_tutorial.png",
    },
    {
      header: "Jak wybrać procesor? Co trzeba wiedzieć o CPU?",
      img: "./images/cpu_tutorial.png",
    },
    {
      header: "Smartwatch dla Ciebie. Do czego służy inteligentny zegarek i jaki wybrać?",
      img: "./images/smartwatch_tutorial.png",
    },
    {
      header: "Jaką kartę pamięci wybrać? Która do smartfona, tabletu, aparatu?",
      img: "./images/memory_tutorial.png",
    },
  ];

  return (
    <div className="page">
      <Slider />
      <Recomended />
      <Informations title={"Odkryj Online Store"} content={info} mediumSize={true}/>
      <Informations title={"Aktualności"} content={news} />
      <Informations title={"Poradniki"} content={tutorials} />
      <LastWatched />
    </div>
  );
};

export default HomePage;
