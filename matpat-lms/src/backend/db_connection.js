const db = require('mongoose');
const uri = process.env.ATLAS_URI;

export default function dbConnect(){
    db.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
    if (err) { throw err; }
}
export default function dbDisconnect(){
    db.connection.close();
    if (err) { throw err; }
}   