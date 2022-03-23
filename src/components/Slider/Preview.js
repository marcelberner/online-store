import "./Preview.scss";

const Preview = (props) => {
  return (
    <div className="preview">
      {props.SLIDES.map((slide) => {
        let className = "preview__content";
        if (slide.id - 1 === props.currentPosition)
          className = "preview__content preview__content--active";

        return (
          <div key={Math.random()} className={className}>
            <img
              key={Math.random()}
              data-id={slide.id}
              src={slide.img}
              alt={"slide"}
              className="preview__item"
              onClick={props.selectSlide}
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
