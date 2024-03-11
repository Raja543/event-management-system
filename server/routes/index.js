const express = require("express");
const router = express.Router();
const authRouter = require("./AuthRoute"); 
const eventRouter = require("./EventRoute");

router.use('/api/auth', authRouter);
router.use('/api/event', eventRouter);

module.exports = router;