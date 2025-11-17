import React, { use } from "react";
import parcelImg from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ testimonialPromise }) => {
  const testimonials = use(testimonialPromise);
  console.log(testimonials);
  return (
    <div className="w-[80%] mx-auto my-14">
      <div className="flex flex-col items-center py-5">
        <img className="w-3/12" src={parcelImg} alt="" />
        <h3 className="text-4xl font-bold text-center text-secondary py-3.5">
          What our customers are sayings
        </h3>
        <p className="text-sm text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      {/* testimonial div */}
      <div className="my-10">
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            scale: 0.8,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimon, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 w-full max-w-sm">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#90C3D4] text-3xl mb-3" />

                {/* Text */}
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {testimon.review}
                </p>

                {/* Divider */}
                <div className="border-b border-dashed border-gray-300 my-5"></div>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0A6375] rounded-full">
                    <img
                      src={testimon.user_photoURL}
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimon.userName}
                    </h3>
                    <p className="text-[13px] text-gray-500">
                      Senior Product Designer
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
