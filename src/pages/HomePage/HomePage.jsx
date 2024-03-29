import { useQuery } from "react-query";
import useData from "../../hooks/useData";

import Slider from "../../components/Slider/Slider";
import Recomended from "../../components/recomended/Recomended";
import Informations from "../../components/Informations/Informations";
import LastWatched from "../../components/LastWatched/LastWatched";
import Bestsellers from "../../components/Bestsellers/Bestsellers";

import NEWS from "../../data/news";
import TUTORIALS from "../../data/tutorials";
import INFORMATIONS from "../../data/informations";

import "./HomePage.scss";

const HomePage = () => {
  const { getProducts } = useData();

  const { data, isError, error } = useQuery({
    queryKey: ["products", { featured: "true" }],
    queryFn: () => getProducts("?featured=true"),
  });

  return (
    <div className="home-page">
      <Slider />
      <Recomended products={data && data.products.slice(0, 8)} />
      <Informations
        title={"Odkryj Online Store"}
        content={INFORMATIONS}
        mediumSize={true}
      />
      <Bestsellers title={"Bestsellery"} products={data && data.products.slice(0, 12)} />
      <Informations title={"Aktualności"} content={NEWS} />
      <LastWatched
        title={"Ostatnio oglądane"}
        products={data && data.products.slice(0, 12)}
      />
      <Informations title={"Poradniki"} content={TUTORIALS} />
    </div>
  );
};

export default HomePage;
