const db = require('../db_connection');
const collection = "Lesson";


exports.getLessons = function() {
    db.getDB().collection(collection).find({}).toArray((err, documents) => {
            if (err) {
                console.log(err);
            } else {
                console.log(documents);
                return documents;
            }
        });
}

