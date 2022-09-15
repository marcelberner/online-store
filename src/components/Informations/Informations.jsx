import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";
import SectionHeader from "../UI/header/SectionHeader";
import News from "./News";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "./Informations.scss";

const Informations = (props) => {
  return (
    <section className="informations">
      <SectionHeader text={props.title} />
        <Swiper
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper informations__content"
          slidesPerView={"auto"}
        >
          {props.content.map((news, index) => (
            <SwiperSlide className="slide" key={index}>
              <News
                img={news.img}
                header={news.header}
                mediumSize={props.mediumSize ? props.mediumSize : ""}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default Informations;
