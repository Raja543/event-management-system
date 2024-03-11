require('dotenv').config();
const mongodburl = process.env.MONGODB_URL
const port = process.env.port;
const accessToken=process.env.ACCESS_TOKEN_KEY;
const refreshToken=process.env.REFRES_TOKEN_KEY;
const reactAppUrl=process.env.REACT_APP_URL;


module.exports = {
    mongodburl,
    port,
    accessToken,
    refreshToken,
    reactAppUrl
};