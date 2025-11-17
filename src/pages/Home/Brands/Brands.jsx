import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vectore from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import straPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandsLogos = [
  amazon,
  amazon_vectore,
  casio,
  moonstar,
  randstad,
  star,
  straPeople,
];

const Brands = () => {
  return (
    <div className="my-14 w-[80%] mx-auto">
      <h3 className="text-center text-2xl text-secondary font-bold py-3.5">
        We've helped thousands of sales teams
      </h3>
      {/* brands slider */}
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          modules={[Autoplay]}
        >
          {brandsLogos.map((brand, index) => (
            <SwiperSlide key={index}>
              <img src={brand} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
