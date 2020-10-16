const Lesson = require('../model/lesson_model');

export async function createLesson(lesson_name, date, startTime, endTime, description) {

    new Lesson({
      lesson_name,
      date,
      startTime,
      endTime,
      description,
    });
  }