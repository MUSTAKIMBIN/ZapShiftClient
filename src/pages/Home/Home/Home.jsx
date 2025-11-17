import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWorks";
import OurServises from "../OurServises/OurServises";
import Brands from "../Brands/Brands";
import Testimonial from "../Testimonial/Testimonial";
import Faq from "../FAQ/Faq";

const testimonialPromise = fetch(`/reviews.json`).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServises></OurServises>
      <Brands></Brands>
      <Testimonial testimonialPromise={testimonialPromise}></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
