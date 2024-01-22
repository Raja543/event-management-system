import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BrandInfo from "../components/BrandInfo";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
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
          <HashLink to="/event/create">
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
    </>
  );
};

export default Home;
