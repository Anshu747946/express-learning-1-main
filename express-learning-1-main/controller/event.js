const Events = require("../model/event");


const getEventsController = (req, res) => {
  console.log("hello from get req");

  res.send("Hello from get request");
};
const addEventController = async (req, res) => {
  try {
    //get the event data from the request body
    const eventData = req.body;
    // console.log("Event data received:", eventData);
    //add an event to the database
    console.log("Adding event:", eventData);
    const result = await Events.create({ ...eventData });
    if (result) {
      console.log("Event added successfully:", result);
    } else {
      res.status(500).send("Failed to add event");
      return;
    }
    // console.log("Event added successfully:", result);
    res.status(200).send("Event added successfully");

  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
    addEventController,
    getEventsController,
};