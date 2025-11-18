import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutUs = () => {
  return (
    <div className="w-[90%] mx-auto rounded-2xl my-10 bg-white py-10 px-10">
      <h3 className="text-4xl text-secondary font-bold py-2.5">About Us</h3>
      <p className="text-secondary text-sm py-3">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal <br /> packages to business shipments — we deliver
        on time, every time.
      </p>
      <div className="divider my-5"></div>
      {/* tabs */}
      <div className="py-5">
        <Tabs>
          <TabList>
            <Tab>Story</Tab>
            <Tab>Mission</Tab>
            <Tab>Success</Tab>
            <Tab>Team & Other</Tab>
          </TabList>
          {/* tab panel 01 */}
          <TabPanel>
            <p>
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </p>
            <p>
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </p>
            <p>
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </p>
          </TabPanel>
          {/* tab panel 02 */}
          <TabPanel>
            <p>
              At ZapShift, our mission is to make parcel delivery fast,
              reliable, and stress-free for every Bangladeshi.
            </p>
            <p>
              We aim to build a nationwide delivery network that brings people
              closer — whether they’re sending documents across Dhaka, gifts to
              family in the village, or products to customers all over the
              country.
            </p>
            <p>We believe delivery should be:</p>
            <ul className=" indent-10">
              <li>Simple — easy booking, clear tracking, no confusion</li>
              <li>Fast — same-day and next-day delivery you can trust</li>
              <li>
                Reliable — every parcel handled with care and delivered safely
              </li>
              <li>
                Affordable — fair pricing for everyone, from small sellers to
                large businesses
              </li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutUs;
