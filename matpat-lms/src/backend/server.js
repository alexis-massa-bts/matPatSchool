const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUriParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection is established successfully');
});

const lessonRouter = require('./route/lesson_route');
app.use('/lesson_model', lessonRouter);

app.get("/",(req, res) => {
    lesson
    .find()
    .then((lesson) => res.json(lesson))
    .catch((err) => res.status(400).json("Error:" + err));
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});