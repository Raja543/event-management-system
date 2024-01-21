import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="px-24 py-8 bg-[#F8F8FA] flex flex-row items-center justify-between">
      <HashLink to="/">
        <div className="font-bold text-4xl">
          Event
          <span className="text-[#7848F4]"> Hive</span>
        </div>
      </HashLink>
      <div className="flex flex-row items-center justify-center gap-4">
        <HashLink smooth to="/login">
          <button className="px-4 font-bold">Login</button>
        </HashLink>
        <HashLink smooth to="/signup">
          <button className="px-6 py-3 rounded-md bg-[#7848F4] text-white font-bold ml-4">
            Signup
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
