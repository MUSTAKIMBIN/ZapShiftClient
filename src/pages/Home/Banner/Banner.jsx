import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CgArrowTopRight } from "react-icons/cg";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="my-10">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="relative">
          <img src={bannerImg1} alt="" />
          {/* button div */}
          <div className="flex gap-2.5 items-center absolute bottom-22 left-22">
            <div className="flex items-center">
              <button className="btn bg-primary rounded-full">
                Track Your Parcel
              </button>
              <button className="bg-black px-2 py-2 rounded-full text-primary font-bold text-2xl">
                <CgArrowTopRight />
              </button>
            </div>
            <button className="btn rounded-lg">Be A Rider</button>
          </div>
        </div>
        <div className="relative">
          <img src={bannerImg2} alt="" />
          {/* button div */}
          <div className="flex gap-2.5 items-center absolute bottom-22 left-22">
            <div className="flex items-center">
              <button className="btn bg-primary rounded-full">
                Track Your Parcel
              </button>
              <button className="bg-black px-2 py-2 rounded-full text-primary font-bold text-2xl">
                <CgArrowTopRight />
              </button>
            </div>
            <button className="btn rounded-lg">Be A Rider</button>
          </div>
        </div>
        <div className="relative">
          <img src={bannerImg3} alt="" />
          {/* button div */}
          <div className="flex gap-2.5 items-center absolute bottom-22 left-22">
            <div className="flex items-center">
              <button className="btn bg-primary rounded-full">
                Track Your Parcel
              </button>
              <button className="bg-black px-2 py-2 rounded-full text-primary font-bold text-2xl">
                <CgArrowTopRight />
              </button>
            </div>
            <button className="btn rounded-lg">Be A Rider</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
