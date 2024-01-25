import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

const CollegeEvent = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-24">
        <h1 className="text-6xl font-bold py-8 ">
          Checkout your<span className="text-[#7848F4]"> college events</span>{" "}
          now!!
        </h1>
        <div className="flex flex-row items-center justify-center px-0 gap-5">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/college-cover3.svg"
            alt="college-cover"
          />
          <img
            className="w-full h-full object-cover"
            src="/assets/images/college-cover1.svg"
            alt="college-cover"
          />
          <img
            className="w-full h-full object-cover"
            src="/assets/images/college-cover2.svg"
            alt="college-cover"
          />
        </div>
      </div>
      <div className="p-24 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold py-8 text-[#7848F4] ">
            Colleges <span className="text-[#000]"> Near you</span>
          </h1>
          <div className="flex flex-row gap-5">
            <button className="bg-[#687C940D] bg-opacity-5 py-2 px-4 rounded">
              Dropdown <span className="ml-4"> # </span>
            </button>
            <button className="bg-[#687C940D] bg-opacity-5 py-2 px-4 rounded">
              Dropdown <span className="ml-4"> # </span>
            </button>
            <button className="bg-[#687C940D] bg-opacity-5 py-2 px-4 rounded">
              Dropdown <span className="ml-4"> # </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <EventCard />
          <EventCard />
          <EventCard />
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

export default CollegeEvent;
