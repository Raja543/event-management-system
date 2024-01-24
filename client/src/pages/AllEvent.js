import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

const AllEvent = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-center justify-center pl-24">
        <div className="w-1/2 flex flex-col">
          <p className="text-lg">Thriving Above Event Expectations.</p>
          <h1 className="text-8xl font-bold py-2 ">
            Event<span className="text-[#7848F4]">Hive</span>-ing the Best Day
            Ever
          </h1>
          <div className="flex flex-row gap-5">
            <div className="bg-[#7848F4] text-[#fff] p-5 max-w-fit rounded-xl">
              <p className="pb-1">2k+</p>
              <p>Total Events</p>
              <p>Hosted</p>
            </div>
            <div className="bg-[#7848F4] text-[#fff] p-5 max-w-fit rounded-xl">
              <p className="pb-1">2k+</p>
              <p>Total Events</p>
              <p>Hosted</p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img
            src="/assets/images/allevent-cover.svg"
            className="w-full h-full object-cover"
            alt="allevent-cover"
          />
        </div>
      </div>
      <div className="p-24 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold py-8 text-[#7848F4] ">
            Events <span className="text-[#000]"> around you</span>
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

export default AllEvent;
