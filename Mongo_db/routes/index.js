var express = require('express');
var router = express.Router();
// const userModel = require('./users');
const userModel1 = require("./testing");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// mongoose basic level

// create(); is for inserting data in schema
// router.get('/create', async function(req, res, next) {
//  let user1 = await userModel.create({
//   username : "wht_avi",
//   name : "Avneesh",
//   age : 19
//  });
//  res.send(user1);
// });


// create(); is for inserting data in schema
// router.get('/createharsh', async function(req, res, next) {
//   let user1 = await userModel.create({
//    username : "harsh",
//    name : "harsh",
//    age : 19
//   });
//   res.send(user1);
//  });


 // find(); is use to find all users in collection 
// router.get('/find' , async (req,res,next)=>{
//  let allusers =  await userModel.find();
//  res.send(allusers);
// });


// findOne(); is use to find one user in whole collection
// router.get('/findOne' , async (req,res,next)=>{
//  let getuser = await userModel.findOne({});
//  res.send(getuser);
// });


// findOneAndDelete(); is use to find that one user and to delete as well
// router.get('/delete' , async (req,res,next)=>{
//   let deluser = await userModel.findOneAndDelete({});
//   res.send(deluser);
//  });






module.exports = router;