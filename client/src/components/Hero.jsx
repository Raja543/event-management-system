import React from "react";

const Hero = () => {
  return (
    <div className="relative h-400px mx-10 z-0">
      <img
        src="/assets/images/Hero.svg"
        alt="hero-bg"
        className="w-full h-full object-cover "
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <p className="text-6xl font-bold uppercase">Made For Those</p>
        <p className="text-6xl font-bold uppercase py-2">Who do</p>
      </div>
      <div className="bg-[#10107B] absolute px-20 py-8 flex flex-row items-center justify-center mx-20 mt-[-100px] gap-12">
        <div className="flex flex-col">
          <p className="text-[#fff] pb-2">Looking For</p>
          <button className="bg-[#ECECEC] py-2 px-8 rounded">
            Choose Event Type <span className="ml-8"> # </span>
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-[#fff] pb-2">Looking For</p>
          <button className="bg-[#ECECEC] py-2 px-8 rounded">
            Choose Event Type <span className="ml-8"> # </span>
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-[#fff] pb-2">Looking For</p>
          <button className="bg-[#ECECEC] py-2 px-8 rounded">
            Choose Event Type <span className="ml-8"> # </span>
          </button>
        </div>
        <div className="flex flex-col p-3">
          <button className="bg-[#7848F4] py-2 px-6 rounded">#</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
