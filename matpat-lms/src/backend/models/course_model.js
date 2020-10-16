const mongoose = require('mongoose');

const courseTable = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        unique: true
    },
    achievement: {
        type: String,
        required: false,
        unique: true
    }
});

const  Course = mongoose.model('Course', courseTable);
module.exports = Course;