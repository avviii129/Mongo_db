const mongoose = require('mongoose');




// connect(); is used to connect to the localserver or cloud server
mongoose.connect("mongodb://127.0.0.1:27017/Mydb");


// designing and declearing the Schema of the collection 
const userschema = mongoose.Schema({
  username : String,
  name : String,
  age : Number
});

// and whenever we declare model(); function the collection will create on database by itself
module.exports = mongoose.model("users", userschema);