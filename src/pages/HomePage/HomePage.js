import { React } from "react";
// import { useSelector } from "react-redux";

import useProducts from "../../hooks/useProducts";

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
  // const isloading = useSelector((state) => state.isLoading.isLoading);
  const { data } = useProducts({ method: "GET", database: "products" });

  return (
    <div className="home-page">
      <Slider />
      <Recomended products={data}/>
      <Informations
        title={"Odkryj Online Store"}
        content={INFORMATIONS}
        mediumSize={true}
      />
      {data && <Bestsellers title={"Bestsellery"} products={data} />}
      <Informations title={"Aktualności"} content={NEWS} />
      {data && <LastWatched title={"Ostatnio oglądane"} products={data} />}
      <Informations title={"Poradniki"} content={TUTORIALS} />
    </div>
  );
};

export default HomePage;
