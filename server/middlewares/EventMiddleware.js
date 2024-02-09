const Event = require('./EventModel');

// Middleware to check if event exists by ID
exports.checkEventExists = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    req.event = event;
    next();
  } catch (error) {
    console.error('Error checking event existence:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};