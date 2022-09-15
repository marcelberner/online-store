import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";

import ProductItem from "../Products/ProductPreview/ProductItem";
import SectionHeader from "../UI/header/SectionHeader";

import "./LastWatched.scss";

const LastWatched = (props) => {
  return (
    <section className="last-watched">
      <SectionHeader text={props.title} />
      {/* <div className="last-watched__content"> */}
      <Swiper
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper last-watched__content"
          slidesPerView={"auto"}
        >
        {props.products.map((product, index) => (
          <SwiperSlide className="slide" key={index}>
            <ProductItem
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              size={"small"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </section>
  );
};

export default LastWatched;
