const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  Venue: {
    type: String,
    required: true,
  },
  StartTime: {
    type: Date,
    required: true,
  },
  EndTime: {
    type: Date,
    required: true,
  },
  StartDate: {
    type: Date,
    required: true,
  },
  EndDate: {
    type: Date,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", EventSchema);
