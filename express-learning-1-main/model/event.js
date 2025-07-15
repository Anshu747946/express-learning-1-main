const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 10
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true,
    min: 1
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  image: {
    type: String,
    default: ""
  },
  tags: {
    type: [String],
    enum: ["tech", "music"],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
