import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RegisterEvent = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
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
        "http://localhost:4000/api/event/register",
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
    setInputValue({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="px-40 pb-72 pt-16  bg-[#F8F8FA] flex flex-col">
        <h1 className="text-4xl font-bold text-center">Registration</h1>
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="text-lg py-1 px-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={inputValue.name}
            placeholder="Enter your name"
            className="rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="enail" className="text-lg py-1 px-1">
            Your Email
          </label>
          <input
            type="text"
            name="email"
            value={inputValue.email}
            placeholder="Enter your email"
            className="rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#7848F4] text-white px-8 py-3 rounded-md mt-4 max-w-fit mx-auto"
        >
          Register
        </button>
      </div>
      <Footer />
    </>
  );
};

export default RegisterEvent;
