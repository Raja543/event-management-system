import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Backendurl = process.env.BACKEND_URL || "http://localhost:4000";

const AuthContext = createContext({
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  login: () => {},
  logout: () => {},
  signup: () => {},
});
// Create an Axios instance with credentials enabled
const axiosInstance = axios.create({
  withCredentials: true,
});

const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "refreshToken",
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    const getAuthDataFromCookies = () => {
      const accessToken = cookies.accessToken;
      const refreshToken = cookies.refreshToken;

      if (accessToken && refreshToken) {
        return { accessToken, refreshToken };
      }

      return null;
    };

    const storedAuthData = getAuthDataFromCookies();
    if (storedAuthData) {
      setIsLoggedIn(true);
      setAccessToken(storedAuthData.accessToken);
      setRefreshToken(storedAuthData.refreshToken);
    }
  }, [cookies]);

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post(
        `${Backendurl}/api/auth/login`,
        {
          email,
          password,
        }
      );
      const { accessToken, refreshToken } = response.data;
      storeAuthDataInCookies({ accessToken, refreshToken });
      setIsLoggedIn(true);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async (email, password, username) => {
    try {
      const response = await axios.post(`${Backendurl}/api/auth/signup`, {
        email,
        password,
        username,
      });
      const success = response.data;
      if (success) {
        storeAuthDataInCookies({
          accessToken: "",
          refreshToken: "",
        });
        setIsLoggedIn(true);
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = async () => {
    removeAuthDataFromCookies();
    setIsLoggedIn(false);
    setAccessToken(null);
    setRefreshToken(null);
  };

  const storeAuthDataInCookies = (authData) => {
    setCookie("accessToken", authData.accessToken, {
      secure: true,
      httpOnly: true,
    });
    setCookie("refreshToken", authData.refreshToken, {
      secure: true,
      httpOnly: true,
    });
  };

  const removeAuthDataFromCookies = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        accessToken,
        refreshToken,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

export const useAuth = () => {
  return React.useContext(AuthContext);
};
