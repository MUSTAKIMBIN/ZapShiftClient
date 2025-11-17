import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div className="my-10 w-[80%] mx-auto">
      <h3 className="text-4xl font-bold text-secondary">How it Works</h3>
      <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* card 01 */}
        <div className="py-5 px-5 rounded-xl bg-white">
          <img src={bookingIcon} alt="" />
          <h3 className="text-xl text-secondary font-bold my-5">
            Booking Pick & Drop
          </h3>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        {/* card 02 */}
        <div className="py-5 px-5 rounded-xl bg-white">
          <img src={bookingIcon} alt="" />
          <h3 className="text-xl text-secondary font-bold my-5">
            Cash On Delivery
          </h3>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        {/* card 03 */}
        <div className="py-5 px-5 rounded-xl bg-white">
          <img src={bookingIcon} alt="" />
          <h3 className="text-xl text-secondary font-bold my-5">
            Delivery Hub
          </h3>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        {/* card 04 */}
        <div className="py-5 px-5 rounded-xl bg-white">
          <img src={bookingIcon} alt="" />
          <h3 className="text-xl text-secondary font-bold my-5">
            Booking SME & Corporate
          </h3>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
