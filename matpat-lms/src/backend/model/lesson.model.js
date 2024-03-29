const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  lessonName: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  },
  description: {
    type: String,
  },
  content: [{ id: mongoose.Schema.Types.ObjectId }],
});

const lesson = mongoose.model("Lesson", lessonSchema);
module.exports = lesson;