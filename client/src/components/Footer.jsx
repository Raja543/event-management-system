import React from "react";

const Footer = () => {
  return (
    <div className="py-6 px-4 bg-[#10107B] flex flex-col">
      <h1 className="font-bold text-4xl text-[#fff] text-center">
        Event
        <span className="text-[#7848F4]"> Hive</span>
      </h1>
      <div className="flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-3 w-[320px] rounded-md bg-[#fff] text-[#10107B]  my-6 focus:outline-none"
        />
        <button className="px-6 py-3 rounded-md bg-[#7848F4] text-white font-bold ml-4">
          Subscribe
        </button>
      </div>
      <hr className="mt-16 mb-4 w-[90%] border-[#fff] mx-auto" />
      <div className="flex justify-between items-center gap-4 px-16 ">
        <div className="flex flex-row">
          <button className="px-4 py-2 rounded-md bg-[#7848F4] text-white  ml-4">
            English
          </button>
          <button className="px-4 rounded-md text-white ml-4">Hindi</button>
          <button className="px-4 rounded-md text-white ml-4">French</button>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 cursor-pointer">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png"
            className="w-8 h-8"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
            className="w-8 h-8"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            className="w-8 h-8"
          />
        </div>
        <div>
          <p className="text-[#fff] font-bold">
            © 2024 Event Hive. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
