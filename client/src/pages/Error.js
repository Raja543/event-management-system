import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import SocialIcons from "../components/SocialIcon";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-60 py-12">
        <img
          src="/assets/images/error-404.svg"
          alt="error-cover"
          className="w-1/2"
        />
        <h1 className="text-4xl font-bold py-6">Oops!</h1>
        <p className="text-2xl opacity-50">
          We can’t seem to find the page you are looking for
        </p>
        <HashLink to="/">
          <button className="px-4 py-2 border rounded-3xl bg-[#7848F4] text-white my-6">
            Back to Homepage
          </button>
        </HashLink>
        <div className="py-6">
          <p className="text-xl text-center py-6">Follow us on</p>
          <SocialIcons />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
