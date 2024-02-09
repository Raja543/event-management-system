const express = require('express');
const router = express.Router();
const {createEvent , updateEvent , deleteEvent} = require("./EventController");
const { checkEventExists } = require('../middlewares/EventMiddleware');


router.post("/create", createEvent);
router.put('/:id', checkEventExists, updateEvent);
router.delete('/:id', checkEventExists, deleteEvent);


module.exports = router;
