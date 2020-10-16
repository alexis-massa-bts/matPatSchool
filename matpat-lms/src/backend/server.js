const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URL;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection is established successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});