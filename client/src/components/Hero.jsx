import React from "react";

const Hero = () => {
  return (
    <div className="relative h-400px mx-10">
      <img
        src="/assets/images/Hero.svg"
        alt="hero-bg"
        className="w-full h-full object-cover "
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <p className="text-6xl font-bold uppercase">Made For Those</p>
        <p className="text-6xl font-bold uppercase py-2">Who do</p>
      </div>
    </div>
  );
};

export default Hero;
