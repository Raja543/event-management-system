import React from "react";

const EventCard = ({}) => {
  return (
    <div className="p-4 border bg-[#fff] rounded-xl flex flex-col ">
      <img
        className="w-full h-full object-cover"
        src="/assets/images/image3.svg"
      />
      <h1 className="py-2">
        BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
      </h1>
      <p className="text-xs text-[#7848F4] py-2">Saturday, March 18, 9.30PM</p>
      <p className="text-xs text-[#7E7E7E] py-2">ONLINE EVENT - Attend anywhere</p>
    </div>
  );
};

export default EventCard;

// image, eventTitle, Day, Date, Time, Type, Location
