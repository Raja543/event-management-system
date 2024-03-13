require('dotenv').config();
const mongodburl = process.env.MONGODB_URL
const port = process.env.port;
const accessTokenSecret=process.env.ACCESS_TOKEN_KEY;
const refreshTokenSecret=process.env.REFRESH_TOKEN_KEY;
const reactAppUrl=process.env.REACT_APP_URL;


module.exports = {
    mongodburl,
    port,
    accessTokenSecret,
    refreshTokenSecret,
    reactAppUrl
};