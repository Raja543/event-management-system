import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLink } from "react-router-hash-link";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const { email, password } = inputValue;

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

  const handleClickShowPassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const success = login(email, password);
      if (success) {
        handleSuccess("Login successful!");
        navigate("/");
      } else {
        handleError("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row bg-[#F8F8FA] ">
      <div className="w-2/5 flex items-center justify-center bg-[#ffff]">
        <img
          className="w-full h-full object-cover"
          src="/assets/images/signup-cover.svg"
          alt="signup-cover"
        />
      </div>
      <form className="w-3/5 flex flex-col p-20" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold py-4 text-center">
          Event <span className="text-[#7848F4]">Hive</span>
        </h1>
        <h2 className="text-4xl font-bold py-4 text-center">
          Sign in to Event Hive
        </h2>
        <div className="flex flex-col py-8">
          <label htmlFor="email" className="text-lg py-1 px-1">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            autoComplete="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
            required
          />

          <label htmlFor="password" className="text-lg pt-4">
            Password
          </label>
          <div className="relative my-2">
            <input
              type={passwordType}
              value={password}
              name="password"
              placeholder="Enter password"
              autoComplete="current-password"
              className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
              onChange={handleOnChange}
              required
            />
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleClickShowPassword}
            >
              {passwordType === "password" ? (
                <Eye className="text-icon-color hover:text-hover-icon-color mr-2" />
              ) : (
                <EyeOff className="text-icon-color hover:text-hover-icon-color mr-2" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#7848F4] text-white text-xl px-10 py-3 rounded-lg my-2 w-60 mx-auto "
          >
            Login
          </button>
          <p className="my-2 text-[#7E7E7E] text-center text-2xl">Or</p>

          <button className="px-10 py-2 border flex gap-2 border-slate-200 max-w-fit rounded-lg mx-auto bg-[#ffff]">
            <img
              className="w-6 h-6"
              src="assets/images/google-logo.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Login with Google</span>
          </button>
          <p className="text-lg cursor-pointer text-center py-2">
            Don't have an account?
            <HashLink to="/signup" smooth>
              <span className="text-[#7848F4]"> Sign up</span>
            </HashLink>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
