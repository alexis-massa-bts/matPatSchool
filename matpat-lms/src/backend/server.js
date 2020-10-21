const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//For each route file
const lessonRoutes = require('./route/lesson_route');
app.use('/lesson', lessonRoutes);

app.use(cors());
app.use(express.json());

//Session
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized : true
}));

const uri = 'mongodb+srv://Admin:Admin@cluster0.gciha.mongodb.net/MatPatSchoolBDD?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection is established successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});