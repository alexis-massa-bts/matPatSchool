const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
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

const  Course = mongoose.model('Course', courseSchema);
module.exports = Course;