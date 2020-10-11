const mongoose = require('mongoose');

const groupTable = new mongoose.Schema({
    groupName: {
        type: String,
        required: true,
        unique: true
    }
});

function addStudent(){
}

function removeStudent(){
}

function importStudent(){
}

function exportStudent(){
}

const  Group = mongoose.model('Group', groupTable);
module.exports = Group;