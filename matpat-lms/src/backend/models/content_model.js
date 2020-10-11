const mongoose = require('mongoose');

const contentTable = new mongoose.Schema({
    contentName: {
        type: String,
        required: true,
        unique: true
    },
    source: {
        type: String,
        required: false,
        unique: false
    },
    path: {
        type: String,
        required: true,
        unique: true
    }
});

const  Content = mongoose.model('Content', contentTable);
module.exports = Content;