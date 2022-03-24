import "./Preview.scss";

const Preview = (props) => {
  return (
    <div className="preview">
      {props.SLIDES.map((slide) => {
        let className = "preview__content";
        if (slide.id - 1 === props.currentPosition)
          className = "preview__content preview__content--active";

        return (
          <div
            key={Math.random()}
            className={className}
            data-id={slide.id}
            style={{ backgroundImage: `url(${slide.img})` }}
            alt={"slide"}
            onClick={props.selectSlide}
          ></div>
        );
      })}
    </div>
  );
};

export default Preview;
