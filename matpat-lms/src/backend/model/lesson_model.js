const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
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
  content: [{ id: String }],
});

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
