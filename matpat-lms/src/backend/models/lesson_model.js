const mongoose = require('mongoose');

const lessonTable = new mongoose.Schema({
    lessonName: {
        type: String,
        required: true,
        unique: false
    },
    date: {
        type: Date,
        required: false,
        unique: false
    },
    time: {
        type: Date,
        required: false,
        unique: false
    }
});

const  Lesson = mongoose.model('Lesson', lessonTable);
module.exports = Lesson;