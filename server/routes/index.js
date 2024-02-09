const { Router } = require("express");
const authRouters = require("./AuthRoute");
const eventRouters = require("./EventRoute");

const router = Router();

app.use("/api/auth", authRouters);
app.use("/api/events",eventRouters);

module.exports = router;
