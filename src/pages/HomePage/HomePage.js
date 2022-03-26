import Slider from "../../components/slider/Slider";
import Recomended from "../../components/recomended/Recomended";
import Informations from "../../components/Informations/Informations";
import LastWatched from "../../components/last_watched/LastWatched";
import Bestselers from "../../components/Bestselers/Bestselers";

import NEWS from "../../data/news";
import TUTORIALS from "../../data/tutorials";
import INFORMATIONS from "../../data/informations";
import PRODUCTS from "../../data/Products";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="page">
      <Slider />
      <Recomended />
      <Informations
        title={"Odkryj Online Store"}
        content={INFORMATIONS}
        mediumSize={true}
      />
      <Bestselers title={"Bestselery"} products={PRODUCTS}/>
      <Informations title={"Aktualności"} content={NEWS} />
      <LastWatched title={"Ostatnio oglądane"} products={PRODUCTS} />
      <Informations title={"Poradniki"} content={TUTORIALS} />
    </div>
  );
};

export default HomePage;
