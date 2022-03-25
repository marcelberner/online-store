import Slider from "../../components/slider/Slider";
import Recomended from "../../components/recomended/Recomended";
import Bestselers from "../../components/Bestselers/Bestselers";
import LastWatched from "../../components/last_watched/LastWatched";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="page">
      <Slider />
      <Recomended />
      <Bestselers />
      <LastWatched />
    </div>
  );
};

export default HomePage;
