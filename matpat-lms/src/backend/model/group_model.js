const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true,
        unique: true
    },
    student: [{
        id: {
            type: String,
        }
    }]
});

// function addStudent(){
// }

// function removeStudent(){
// }

// function importStudent(){
// }

// function exportStudent(){
// }

const  Group = mongoose.model('Group', groupSchema);
module.exports = Group;