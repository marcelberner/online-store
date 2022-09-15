import { useState, useEffect } from "react";

import Window from "./Window";
import Preview from "./Preview";

import SLIDES from "../../data/slides";

import "./Slider.scss";

const Slider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const selectSlide = (e) => {
    setCurrentPosition(e.target.dataset.id - 1);
  };

  const slideMoveForward = () => {
    if (currentPosition === SLIDES.length - 1) setCurrentPosition(0);
    else setCurrentPosition(currentPosition + 1);
  };
  
  const slideMoveBackward = () => {
    if (currentPosition === 0) setCurrentPosition(SLIDES.length - 1);
    else setCurrentPosition(currentPosition - 1);
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (currentPosition === SLIDES.length - 1) setCurrentPosition(0);
      else setCurrentPosition(currentPosition + 1);
    }, 10000);

    return () => clearInterval(sliderInterval);
  }, [currentPosition]);

  return (
    <section className="slider">
      <Window
        slideMoveForward={slideMoveForward}
        slideMoveBackward={slideMoveBackward}
        SLIDES={SLIDES}
        currentPosition={currentPosition}
      />
      <Preview
        SLIDES={SLIDES}
        currentPosition={currentPosition}
        selectSlide={selectSlide}
      />
    </section>
  );
};

export default Slider;
