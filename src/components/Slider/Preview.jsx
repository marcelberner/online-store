import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation, Autoplay } from "swiper";

import "./Preview.scss";

const Preview = (props) => {
  return (
    <div className="preview">
      <Swiper
        onSwiper={props.selectSlide}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Navigation, Autoplay]}
        className="mySwiper last-watched__content"
        slidesPerView={"auto"}
      >
        {props.SLIDES.map((slide, index) => {
          return (
            <SwiperSlide className="slide" key={index}>
              <div
                className="preview__content"
                data-id={slide.id}
                style={{ backgroundImage: `url(${slide.img})` }}
                alt={"slide"}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Preview;
