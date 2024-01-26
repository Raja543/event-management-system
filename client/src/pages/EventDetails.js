import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

const EventDetails = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-center justify-center px-16 relative">
        <img
          src="/assets/images/eventdetails-cover.svg"
          className="w-full h-full object-cover mix-blend-color-burn"
          alt="eventdetails-cover"
        />
        <div className="absolute flex flex-col z-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-[#fff] text-6xl">
              Dream world wide in jakatra
            </h1>
            <p className="text-3xl font-bold text-[#fff]">IIIT Sonepat</p>
            <p className="text-[#fff]">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and animations using Blender. It was
              suitable for both beginners and experienced users. The event was
              followed by a blender-render competition, which added to the
              excitement.
            </p>
            <p className="text-[#fff]">View map</p>
          </div>
          <div  className="p-5">
             <p className="font-bold text-xl">
             Date & time
             </p>
             <p className="font-bold ">
             Date & time
             </p>
          </div>
        </div>
      </div>
      <div className="p-24 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold py-8 ">
            Other events you make like
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
