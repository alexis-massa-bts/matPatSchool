const mongoose = require('mongoose');

const teacherTable = new mongoose.Schema({
    lastname: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        unique: false
    }
});

const  Teacher = mongoose.model('Teacher', teacherTable);
module.exports = Teacher;