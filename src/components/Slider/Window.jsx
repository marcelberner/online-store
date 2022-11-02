import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Window.scss";

const Window = (props) => {
  return (
    <div className="window">
      <Swiper
        style={{
          "--swiper-navigation-color": "red",
        }}
        navigation={true}
        thumbs={{ swiper: props.currentPosition }}
        watchSlidesProgress={true}
        modules={[Thumbs, Navigation, Autoplay]}
        className="mySwiper window__content"
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        {props.SLIDES.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={slide.img} className="window__img" alt={"slide"}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Window;
