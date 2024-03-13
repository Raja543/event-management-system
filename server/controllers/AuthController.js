const User = require("../models/UserModel");
const {createAccessToken, createRefreshToken , verifyRefreshToken } = require("../utils/Auth");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });

    // Create tokens
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    // Set cookies
    res.cookie("accessToken", accessToken, {
      withCredentials: true,
      httpOnly: true,
      secure : true
    });
    res.cookie("refreshToken", refreshToken, {
      withCredentials: true,
      httpOnly: true,
      secure : true
    });

    res.status(201).json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' });
    }

    // Create tokens
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    // Set cookies
    res.cookie("accessToken", accessToken, {
      withCredentials: true,
      httpOnly: true,
      secure : true
    });
    res.cookie("refreshToken", refreshToken, {
      withCredentials: true,
      httpOnly: true,
      secure : true
    });

    res.status(201).json({ message: "User logged in successfully", success: true });
    console.log(accessToken, "this is refesh", refreshToken)
    next();
  } catch (error) {
    console.error(error);
  }
};




// Refresh token route
module.exports.RefreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify the refresh token and get the user ID
    const userId = verifyRefreshToken(refreshToken);
    if (!userId) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    // Create a new access token
    const newAccessToken = createAccessToken(userId);

    // Send the new access token in the response
    res.cookie("accessToken", newAccessToken, {
      withCredentials: true,
      httpOnly: true,
    });

    res.status(200).json({ success: true, message: 'Access token refreshed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

