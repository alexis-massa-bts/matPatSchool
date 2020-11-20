const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const path = require('path');

const port = process.env.PORT || 3000;

const db = require('./db_connection');

db.connect((err) => {
    if (err) {
        console.log('Unable to connect to database');
        process.exit(1);
    } else {
        app.listen(port, () => {
            console.log(`Connected to database. App runnning on port : ${port}`);
        });
    }
})


app.get('/',(req, res) => {
    res.send("Pas d'accueil : GET /");
});

//All route files here : 
const lessonRouter = require('./route/lesson.route');
app.use('/lesson', lessonRouter);


// const lessonRouter = require('./route/lesson.route');
// app.use('/lesson', lessonRouter);


