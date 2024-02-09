const Event = require("./EventModel");

// for creating a new event
module.exports.createEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = await Event.create(eventData);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// for updating an existing event
module.exports.updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const eventData = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, {
      new: true,
    });
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(updatedEvent);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for deleting an event
module.exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

