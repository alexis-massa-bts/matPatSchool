const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const dbname = "MatPatSchoolBDD";
require('dotenv').config();
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true};

const state = {
    db : null
};


const connect = (cb) =>{
    if(state.db){
        cb();
    } else {
        MongoClient.connect(process.env.ATLAS_URI, mongoOptions, (err,client)=>{
            if(err){
                cb(err);
            } else {
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectId(_id);
}

const getDB = () =>{
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};