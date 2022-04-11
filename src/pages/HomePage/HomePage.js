import React from "react";

import Slider from "../../components/slider/Slider";
import Recomended from "../../components/recomended/Recomended";
import Informations from "../../components/Informations/Informations";
import LastWatched from "../../components/last_watched/LastWatched";
import Bestsellers from "../../components/Bestsellers/Bestsellers";

import NEWS from "../../data/news";
import TUTORIALS from "../../data/tutorials";
import INFORMATIONS from "../../data/informations";
import PRODUCTS from "../../data/products";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <Recomended />
      <Informations
        title={"Odkryj Online Store"}
        content={INFORMATIONS}
        mediumSize={true}
      />
      <Bestsellers title={"Bestsellery"} products={PRODUCTS} />
      <Informations title={"Aktualności"} content={NEWS} />
      <LastWatched title={"Ostatnio oglądane"} products={PRODUCTS} />
      <Informations title={"Poradniki"} content={TUTORIALS} />
    </div>
  );
};

export default HomePage;
