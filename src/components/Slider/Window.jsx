import React from "react";

import "./Window.scss";

const Window = (props) => {
  return (
    <div className="window">
      <button
        className="window__button window__button--backward"
        onClick={props.slideMoveBackward}
      >
        <i className="fa-solid fa-arrow-left-long"></i>
      </button>
      <button
        className="window__button window__button--forward"
        onClick={props.slideMoveForward}
      >
        <i className="fa-solid fa-arrow-right-long"></i>
      </button>
      <div className="window__content">
        {props.SLIDES.map((slide, index) => {
          let className = "window__slide";
          if (slide.id - 1 === props.currentPosition)
            className = "window__slide window__slide--active";

          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${slide.img})` }}
              alt={"slide"}
              className={className}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Window;
