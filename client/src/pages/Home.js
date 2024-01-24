import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BrandInfo from "../components/BrandInfo";
import { HashLink } from "react-router-hash-link";
import EventCard from "../components/EventCard";

const Home = () => {
  return (
    <div className="bg-[#ECECEC]">
      <Navbar />
      <Hero />

      {/* Event details section */}
      <div className="p-24 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold py-8 ">
            Upcoming <span className="text-[#7848F4]">Events</span>
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
        </div>
        <HashLink to="/event/all#top" className="mx-auto">
          <button
            type="submit"
            className="bg-[#7848F4] text-white text-lg px-6 py-3 rounded-lg my-8"
          >
            Load More...
          </button>
        </HashLink>
      </div>
      {/* Event create section */}
      <div className="flex flex-row items-center justify-start  my-10 px-16 pb-0 bg-[#10107B]">
        <div className="mt-[-70px] px-20">
          <img
            src="/assets/images/landing1.svg"
            alt="landing-cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center  text-[#fff] p-4 ">
          <h1 className="font-bold text-4xl ">Make your own Event</h1>
          <p className="font-medium text-lg py-3 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <HashLink to="/event/create#top">
            <button
              type="submit"
              className="bg-[#7848F4] text-white px-10 py-3 rounded-md my-4"
            >
              Create Event
            </button>
          </HashLink>
        </div>
      </div>
      <BrandInfo />
      <Footer />
    </div>
  );
};

export default Home;
