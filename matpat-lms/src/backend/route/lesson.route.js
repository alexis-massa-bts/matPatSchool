const router = require('express').Router();
const lessonController = require("../control/lesson.control");


const db = require('../db_connection');
const collection = "Lesson";

router.route('/').get((req, res) => {
    res.json(lessonController.getLessons());
});

// router.post('/add', function (req, res) {
//     lessonController.createlesson;
// });

module.exports = router;