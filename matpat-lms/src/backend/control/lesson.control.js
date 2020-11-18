const Lesson = require("../model/lesson.model");

exports.getLessons = async function (req, res, next) {
    try {

        let allLessonsCursor = Lesson.find({});
        //console.log(allLessonsCursor.count());
        while (allLessonsCursor.hasNext()) {
            let lesson = allLessonsCursor.next();
            console.log(lesson);
        }


        //     var lessons = await Lesson.find();
        //     console.log(lessons);
        //     return res.status(200).json({
        //         status: 200,
        //         data: lessons,
        //         message: "Successfully retrieved lessons"
        //     });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};