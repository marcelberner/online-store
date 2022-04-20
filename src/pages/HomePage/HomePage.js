import { React, useEffect } from "react";

import useData from "../../hooks/useData";

import Slider from "../../components/slider/Slider";
import Recomended from "../../components/recomended/Recomended";
import Informations from "../../components/Informations/Informations";
import LastWatched from "../../components/LastWatched/LastWatched";
import Bestsellers from "../../components/Bestsellers/Bestsellers";

import NEWS from "../../data/news";
import TUTORIALS from "../../data/tutorials";
import INFORMATIONS from "../../data/informations";

import "./HomePage.scss";

const HomePage = () => {
  const { resData, dataRequest } = useData();

  useEffect(() => {
    dataRequest({ method: "GET", database: "products" });
  },[dataRequest]);

  return (
    <div className="home-page">
      <Slider />
      <Recomended products={resData}/>
      <Informations
        title={"Odkryj Online Store"}
        content={INFORMATIONS}
        mediumSize={true}
      />
      {resData && <Bestsellers title={"Bestsellery"} products={resData} />}
      <Informations title={"Aktualności"} content={NEWS} />
      {resData && <LastWatched title={"Ostatnio oglądane"} products={resData} />}
      <Informations title={"Poradniki"} content={TUTORIALS} />
    </div>
  );
};

export default HomePage;
