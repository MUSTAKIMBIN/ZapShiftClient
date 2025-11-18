import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Covarage = () => {
  const position = [23.8103, 90.4125];

  const serviceCenters = useLoaderData();
  console.log(serviceCenters);
  return (
    <div className="w-[90%] mx-auto rounded-2xl py-5 px-5 md:py-16 md:px-16 bg-white my-10">
      <h3 className="text-2xl md:text-4xl text-secondary font-bold">
        We are available in 64 districts
      </h3>
      {/* search */}
      <form className="my-10">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </form>
      {/* map container */}
      <div className="border w-full h-[65vh] mt-5">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[65vh]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>{center.city}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Covarage;
