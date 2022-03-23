import { useState, useEffect } from "react";

import Window from "./Window";
import Preview from "./Preview";

import "./Slider.scss";

const Slider = () => {
  const SLIDES = [
    {
      id: 1,
      img: "./images/slide_1.png",
    },
    {
      id: 2,
      img: "./images/slide_2.png",
    },
    {
      id: 3,
      img: "./images/slide_3.png",
    },
    {
      id: 4,
      img: "./images/slide_4.png",
    },
  ];

  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (currentPosition === SLIDES.length - 1) setCurrentPosition(0);
      else setCurrentPosition(currentPosition + 1);
    }, 10000);

    return () => clearInterval(sliderInterval);
  }, [currentPosition, SLIDES.length]);

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
