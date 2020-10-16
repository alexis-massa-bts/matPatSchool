const express = require('express');
const router = express.Router();
const courseController = require("../controller/course_controller");

router.get('/course', courseController.getcourses);

router.post('course/add', courseController.createcourse);

module.exports = router;