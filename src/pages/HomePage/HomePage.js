import Slider from "../../components/slider/Slider";
import Recomended from "../../components/recomended/Recomended";
import Informations from "../../components/Bestselers/Informations";
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

  return (
    <div className="page">
      <Slider />
      <Recomended />
      <Informations title={"Aktualności"} content={news} />
      <LastWatched />
    </div>
  );
};

export default HomePage;
