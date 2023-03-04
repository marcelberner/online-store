import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";

import ProductItem from "../Products/ProductPreview/ProductItem";
import SectionHeader from "../UI/header/SectionHeader";
import LoadSpinner from "../UI/LoadSpinner/LoadSpinner";

import "./LastWatched.scss";

const LastWatched = (props) => {
  return (
    <section className="last-watched">
      {props.products ? (
        <>
          <SectionHeader text={props.title} />
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
                  key={product._id}
                  id={product._id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  size={"small"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <LoadSpinner />
      )}
    </section>
  );
};

export default LastWatched;
