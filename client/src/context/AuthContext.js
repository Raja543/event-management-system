import React, { createContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [setCookie, removeCookie] = useCookies([
    "accessToken",
    "refreshToken",
  ]);
  const [user, setUser] = useState(null);

  const signupUser = async (userData) => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/auth/signup`,
        userData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };

  const loginUser = async (userData) => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/auth/login`,
        userData,
        { withCredentials: true }
      );
      setCookie("accessToken", response.data.accessToken, {
        path: "/",
        maxAge: 900,
      });
      setCookie("refreshToken", response.data.refreshToken, {
        path: "/",
        maxAge: 2592000,
      });
      setUser(response.data); // Set the user with the data from the response
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  const logout = () => {
    removeCookie("accessToken", { path: "/" });
    removeCookie("refreshToken", { path: "/" });
    setUser(null);
  };

  const refreshToken = async () => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/auth/refresh`,
        {},
        { withCredentials: true }
      );
      setCookie("accessToken", response.data.accessToken, {
        path: "/",
        maxAge: 900,
      });
    } catch (error) {
      console.error("Refresh token failed:", error.response.data);
      logout();
    }
  };

  const isAuthenticated = () => !!user;

  const AuthContextValues = {
    user,
    signupUser,
    loginUser,
    logout,
    refreshToken,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {children}
    </AuthContext.Provider>
  );
};
