// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const EventForm = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     Title: "",
//     Venue: "",
//     StartDate: "",
//     EndDate: "",
//     StartTime: "",
//     EndTime: "",
//     Description: "",
//     image: "",
//   });

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "top-right",
//     });

//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "top-right",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/event/create",
//         inputValue,
//         { withCredentials: true }
//       );
//       console.log(data);
//       const { success, message } = data;
//       if (success) {
//         handleSuccess(message);
//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="px-48 py-6 bg-[#F8F8FA] flex flex-col">
//       <div className="px-40 py-8">
//         <h1 className="text-4xl font-bold text-center">Create Event</h1>
//         <div className="flex flex-col my-4">
//           <label htmlFor="title" className="text-lg py-1 px-1">
//             Event Title
//           </label>
//           <input
//             type="text"
//             name="Title"
//             value={inputValue.Title}
//             placeholder="Enter your event title"
//             className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="flex flex-col my-4">
//           <label htmlFor="venue" className="text-lg py-1 px-1">
//             Venue
//           </label>
//           <input
//             type="text"
//             name="Venue"
//             value={inputValue.Venue}
//             placeholder="Enter your venue"
//             className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div className="flex flex-row items-center justify-between gap-8 my-4">
//           <div className="flex flex-col w-1/2">
//             <label htmlFor="startdate" className="text-lg py-1 px-1">
//               Start Date
//             </label>
//             <input
//               type="date"
//               name="StartDate"
//               value={inputValue.StartDate}
//               placeholder="Enter your start date"
//               className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
//               onChange={handleOnChange}
//             />
//           </div>
//           <div className="flex flex-col w-1/2">
//             <label htmlFor="enddate" className="text-lg py-1 px-1">
//               End Date
//             </label>
//             <input
//               type="date"
//               name="EndDate"
//               value={inputValue.EndDate}
//               placeholder="Enter your end date"
//               className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
//               onChange={handleOnChange}
//             />
//           </div>
//         </div>
//         <div className="flex flex-row items-center justify-between gap-8 my-4">
//           <div className="flex flex-col w-1/2">
//             <label htmlFor="starttime" className="text-lg py-1 px-1">
//               Start Time
//             </label>
//             <input
//               type="time"
//               name="StartTime"
//               value={inputValue.StartTime}
//               placeholder="Enter your start time"
//               className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
//               onChange={handleOnChange}
//             />
//           </div>
//           <div className="flex flex-col w-1/2">
//             <label htmlFor="endtime" className="text-lg py-1 px-1">
//               End Time
//             </label>
//             <input
//               type="time"
//               name="EndTime"
//               value={inputValue.EndTime}
//               placeholder="Enter your end time"
//               className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
//               onChange={handleOnChange}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="px-40 py-8">
//         <div className="flex flex-col my-4">
//           <h1 className="text-4xl font-bold text-center">Event Description</h1>
//           <div className="flex flex-col my-8">
//             <label htmlFor="image" className="text-lg py-1 px-1">
//               Event image
//             </label>
//             <input
//               type="file"
//               name="image"
//               value={Image}
//               placeholder="Enter your image"
//               className="border border-gray-300 rounded-lg p-3 my-1 w-full h-48 focus:outline-none bg-[#ECECEC]"
//               onChange={handleOnChange}
//             />
//           </div>
//           <div className="flex flex-col my-4">
//             <label htmlFor="description" className="text-lg py-1 px-1">
//               Description
//             </label>
//             <textarea
//               type="text"
//               name="Description"
//               value={inputValue.Description}
//               placeholder="Enter your description"
//               className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white resize-none"
//               onChange={handleOnChange}
//               rows="6"
//             />
//           </div>
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="bg-[#7848F4] text-white px-4 py-3 rounded-md mt-4"
//           >
//             Create Event
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    Title: "",
    Venue: "",
    StartDate: "",
    EndDate: "",
    StartTime: "",
    EndTime: "",
    Description: "",
    image: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/event/create",
        inputValue,
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-48 py-6 bg-[#F8F8FA] flex flex-col">
      <div className="px-40 py-8">
        <h1 className="text-4xl font-bold text-center">Create Event</h1>
        <div className="flex flex-col my-4">
          <label htmlFor="title" className="text-lg py-1 px-1">
            Event Title
          </label>
          <input
            type="text"
            name="Title"
            value={inputValue.Title}
            placeholder="Enter your event title"
            className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="venue" className="text-lg py-1 px-1">
            Venue
          </label>
          <input
            type="text"
            name="Venue"
            value={inputValue.Venue}
            placeholder="Enter your venue"
            className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-row items-center justify-between gap-8 my-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="startdate" className="text-lg py-1 px-1">
              Start Date
            </label>
            <input
              type="date"
              name="StartDate"
              value={inputValue.StartDate}
              placeholder="Enter your start date"
              className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="enddate" className="text-lg py-1 px-1">
              End Date
            </label>
            <input
              type="date"
              name="EndDate"
              value={inputValue.EndDate}
              placeholder="Enter your end date"
              className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-8 my-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="starttime" className="text-lg py-1 px-1">
              Start Time
            </label>
            <input
              type="time"
              name="StartTime"
              value={inputValue.StartTime}
              placeholder="Enter your start time"
              className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="endtime" className="text-lg py-1 px-1">
              End Time
            </label>
            <input
              type="time"
              name="EndTime"
              value={inputValue.EndTime}
              placeholder="Enter your end time"
              className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col my-4">
          <h1 className="text-4xl font-bold text-center">Event Description</h1>
          <div className="flex flex-col my-8">
            <label htmlFor="image" className="text-lg py-1 px-1">
              Event image
            </label>
            <input
              type="file"
              name="image"
              value={inputValue.image}
              placeholder="Enter your image"
              className="border border-gray-300 rounded-lg p-3 my-1 w-full h-48 focus:outline-none bg-[#ECECEC]"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="description" className="text-lg py-1 px-1">
              Description
            </label>
            <textarea
              type="text"
              name="Description"
              value={inputValue.Description}
              placeholder="Enter your description"
              className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white resize-none"
              onChange={handleOnChange}
              rows="6"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#7848F4] text-white px-4 py-3 rounded-md mt-4"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventForm;

