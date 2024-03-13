import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLink } from "react-router-hash-link";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [cookies, setCookie] = useCookies(["name", "Token", "email"]);
  const { email, password, username } = inputValue;
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
      const response = await signup({ email: email, password: password });
      console.log("resposnse data ", response);

      // Check if the login was successful
      if (response.status) {
        handleSuccess("Signup successful");
        setCookie("name", response.username);
        setCookie("Token", response.email);
        setCookie("email", response.token);
        console.log(cookies.Token);
        navigate("/");
      } else {
        handleError("Invalid email or password", "signup failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClickShowPassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
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
      <form className="w-3/5 flex flex-col p-20">
        <h1 className="text-3xl font-bold py-4 text-center">
          Event <span className="text-[#7848F4]">Hive</span>
        </h1>
        <h2 className="text-4xl font-bold py-4 text-center">
          Sign Up to Event Hive
        </h2>
        <div className="flex flex-col py-8">
          <label htmlFor="email" className="text-lg py-1 px-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            autoComplete="email"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg p-3 my-1 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
          />
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
            onClick={handleSubmit}
            className="bg-[#7848F4] text-white text-xl px-10 py-3 rounded-lg my-2 w-60 mx-auto "
          >
            SignUp
          </button>
          <p className="my-2 text-[#7E7E7E] text-center text-2xl">Or</p>

          <button className="px-10 py-2 border flex gap-2 border-slate-200 max-w-fit rounded-lg mx-auto bg-[#ffff]">
            <img
              className="w-6 h-6"
              src="assets/images/google-logo.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Sign Up with Google</span>
          </button>
          <p className="text-lg cursor-pointer text-center py-2">
            Already have an account?
            <HashLink to="/login" smooth>
              <span className="text-[#7848F4]"> Login</span>
            </HashLink>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
