var express = require('express');
var router = express.Router();
const employeeModel = require('./employee');

let e_name,e_salary,e_language,e_city,e_isManager;

function randomData(){
  let n = Math.floor(Math.random()*3);
  if(n==0){
    e_name = "Avneesh";
    e_salary = 800000000;
    e_language = "JavaScript";
    e_city = "Los Angles" ;
    e_isManager = "true";
  }
  if(n==1){
    e_name = "Harry";
    e_salary = 800000000;
    e_language = "Python";
    e_city = "New York" ;
    e_isManager = "true";
  }
  if(n==2){
    e_name = "Lailaaa";
    e_salary = 80000999;
    e_language = "Java_core_advance_enterprise";
    e_city = "Poland" ;
    e_isManager = "true";
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/generate' , async function(req,res,next){
//   randomData();
//  const e_data = await employeeModel.create({
//   name : e_name,
//   salary : e_salary,
//   language : e_language,
//   city : e_city,
//   isManager : e_isManager
//   });
//   res.send(e_data);
// })

// router.get('/find' , async (req,res)=>{
//   let allusers = await employeeModel.find();
//   res.send(allusers);
// })

// router.get('/findOne' , async (req,res)=>{
//   let user = await employeeModel.find({salary : 800000000});
//   res.send(user);
// })





module.exports = router;