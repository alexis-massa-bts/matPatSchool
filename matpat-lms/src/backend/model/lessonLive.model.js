const mongoose = require("mongoose");

const lessonLiveSchema = new mongoose.Schema({
  lessonName: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  description: {
    type: String,
  },
  content: [{ id: mongoose.Schema.Types.ObjectId }],
});

const lessonLive = mongoose.model("Lesson", lessonLiveSchema);
module.exports = lessonLive;