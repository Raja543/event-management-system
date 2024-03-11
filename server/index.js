const express = require("express");
const cors = require("cors");
const config = require("./config/server");

// Database connection
const dbConnection = require("./db");
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbConnection.once('open', () => {
  console.log('MongoDB is connected successfully');
});

const app = express();

// Middleware
app.use(cors({
  origin: config.reactAppUrl, 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", require("./routes").default);

const PORT = config.port || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
