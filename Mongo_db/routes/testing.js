const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mydb');

module.exports = mongoose.model('user' , mongoose.Schema({
    username : String,

    nickname : String,

    description : String,

    catagories : {
        type : Array,
        default : [] },

    datecreated : {
        type : Date,
        default : Date.now() },
}));