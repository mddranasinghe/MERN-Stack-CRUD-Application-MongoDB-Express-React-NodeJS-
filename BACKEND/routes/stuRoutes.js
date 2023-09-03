const router = require("express").Router();

let Student = require("../Model/students.js");

router.route("/add").post((req,res) => {

const name= req.body.name;
const age=Number(req.body.age);
const gender=req.body.gender;

const newStudents =new Student(
    {
        name,
        age,
        gender,
    }
);

newStudents.save().then(()=>
{
    res.json("Student addded")
}).catch((err)=>{
console.log(err);

});

});


//viwe students details..................................
router,route("/").get((req,res)=>{

 Student.find().then((studentFunc)=>{
    res.json(studentFunc)
 }).catch((err)=>{
    console.log(err);
 });

});


router.route("/")
module.exports =router;
