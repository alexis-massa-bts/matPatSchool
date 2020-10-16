const express = require('express');
const router = express.Router();
const lessonController = require("../controller/lesson_controller");

router.get('/', lessonController.getLessons);

router.post('/add', function (req, res){
    lessonController.createlesson;
});

module.exports = router;