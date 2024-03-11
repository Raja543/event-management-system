const mongoose = require("mongoose");
const config = require("../config/server");

// Database connection
mongoose
  .connect(config.mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

module.exports = mongoose.connection;
