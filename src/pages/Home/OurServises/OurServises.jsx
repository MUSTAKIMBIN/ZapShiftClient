import React from "react";
import serviceImg from "../../../assets/service.png";

const OurServises = () => {
  return (
    <div className="my-10 w-[90%] mx-auto bg-secondary rounded-2xl">
      <h3 className="text-center text-2xl text-white font-semibold pt-12">
        Our Servises
      </h3>
      <p className="text-white text-xs text-center py-5">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br /> business shipments — we deliver
        on time, every time.
      </p>
      {/* servises items div */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-10 px-10 md:px-20">
        {/* card 01 */}
        <div className="text-center bg-white serviceCard rounded-2xl px-3.5 py-3.5 flex flex-col items-center">
          <div className="bg-[#F3F2FD] px-3 pt-3 rounded-full flex items-center w-[50px] h-[50px]">
            <img className="w-full" src={serviceImg} alt="" />
          </div>
          <h4 className="text-lg text-secondary font-semibold py-3">
            Express & Standard Delivery
          </h4>
          <p className="text-sm text-secondary text-center">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        {/* card 02 */}
        <div className="text-center bg-white serviceCard rounded-2xl px-3.5 py-3.5 flex flex-col items-center">
          <div className="bg-[#F3F2FD] px-3 pt-3 rounded-full flex items-center w-[50px] h-[50px]">
            <img className="w-full" src={serviceImg} alt="" />
          </div>
          <h4 className="text-lg text-secondary font-semibold py-3">
            Nationwide Delivery
          </h4>
          <p className="text-sm text-secondary text-center">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        {/* card 03 */}
        <div className="bg-white serviceCard rounded-2xl px-3.5 py-3.5 flex flex-col items-center">
          <div className="bg-[#F3F2FD] px-3 pt-3 rounded-full flex items-center w-[50px] h-[50px]">
            <img className="w-full" src={serviceImg} alt="" />
          </div>
          <h4 className="text-lg text-secondary font-semibold py-3">
            Fulfillment Solution
          </h4>
          <p className="text-sm text-secondary text-center">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        {/* card 04 */}
        <div className="bg-white serviceCard rounded-2xl px-3.5 py-3.5 flex flex-col items-center">
          <div className="bg-[#F3F2FD] px-3 pt-3 rounded-full flex items-center w-[50px] h-[50px]">
            <img className="w-full" src={serviceImg} alt="" />
          </div>
          <h4 className="text-lg text-secondary font-semibold py-3">
            Cash on Home Delivery
          </h4>
          <p className="text-sm text-secondary text-center">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        {/* card 05 */}
        <div className="text-center bg-white serviceCard rounded-2xl px-3.5 py-3.5 flex flex-col items-center">
          <div className="bg-[#F3F2FD] px-3 pt-3 rounded-full flex items-center w-[50px] h-[50px]">
            <img className="w-full" src={serviceImg} alt="" />
          </div>
          <h4 className="text-lg text-secondary font-semibold py-3">
            Corporate Service / Contract In Logistics
          </h4>
          <p className="text-sm text-secondary text-center">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        {/* card 06 */}
        <div className="bg-white serviceCard rounded-2xl px-3.5 py-3.5 flex flex-col items-center">
          <div className="bg-[#F3F2FD] px-3 pt-3 rounded-full flex items-center w-[50px] h-[50px]">
            <img className="w-full" src={serviceImg} alt="" />
          </div>
          <h4 className="text-lg text-secondary font-semibold py-3">
            Parcel Return
          </h4>
          <p className="text-sm text-secondary text-center">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServises;
