import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWorks";
import OurServises from "../OurServises/OurServises";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServises></OurServises>
      <Brands></Brands>
    </div>
  );
};

export default Home;
