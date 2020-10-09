const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
    login: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    licence: {
        type: Number,
        required: false,
        unique: true
    },
    noLicence: {
        type: Date,
        required: false,
        unique: true
    }
});

function changePwd() {
}

function askPwd() {
}

const  Student = mongoose.model('Student', studentSchema);
module.exports = Student;