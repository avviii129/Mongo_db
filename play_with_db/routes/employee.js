const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mydb');

const employees = mongoose.Schema({
    name : String,
    salary : Number,
    language : String,
    city : String,
    isManager : String
});

module.exports = mongoose.model("employees" , employees);