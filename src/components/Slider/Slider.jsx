import { useState } from "react";

import Window from "./Window";
import Preview from "./Preview";

import SLIDES from "../../data/slides";

import "./Slider.scss";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="slider">
      <Window
        SLIDES={SLIDES}
        currentPosition={thumbsSwiper}
      />
      <Preview
        SLIDES={SLIDES}
        selectSlide={setThumbsSwiper}
      />
    </section>
  );
};

export default Slider;
