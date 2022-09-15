import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";

import "./Preview.scss";

const Preview = (props) => {
  return (
    <div className="preview">
      <Swiper
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper last-watched__content"
        slidesPerView={"auto"}
      >
        {props.SLIDES.map((slide, index) => {
          let className = "preview__content";
          if (slide.id - 1 === props.currentPosition)
            className = "preview__content preview__content--active";

          return (
            <SwiperSlide className="slide" key={index}>
              <div
                className={className}
                data-id={slide.id}
                style={{ backgroundImage: `url(${slide.img})` }}
                alt={"slide"}
                onClick={props.selectSlide}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Preview;
