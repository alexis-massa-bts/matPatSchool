const express = require('express');
const cors = require('cors');
const lessonRouter = require('./route/lesson.route');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/lesson', lessonRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('Connected to BDD');
})

app.listen(port, ()=>{
    console.log(`Runnning on port : ${port}`);
});