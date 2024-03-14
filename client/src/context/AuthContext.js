import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const Backendurl = process.env.BACKEND_URL || "http://localhost:4000";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken", "refreshToken"]);
  const [user, setUser] = useState(null);

  const signup = async (userData) => {
    try {
      const response = await axios.post(
        `${Backendurl}/api/auth/signup`,
        userData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };

  const login = async (userData) => {
    try {
      const response = await axios.post(
        `${Backendurl}/api/auth/login`,
        userData,
        { withCredentials: true }
      );
      // console.log("backend url", Backendurl);
      setCookie("accessToken", response.data.accessTokenSecret, {
        path: "/",
        maxAge: 900,
      });
      setCookie("refreshToken", response.data.refreshTokenSecret, {
        path: "/",
        maxAge: 2592000,
      });
      setUser(response.data); // Set the user with the data from the response
    } catch (error) {
      if (error.response) {
        // Request was made and server responded with a status code
        console.error("Login failed:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error:", error.message);
      }
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
    signup,
    login,
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
