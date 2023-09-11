const router = require("express").Router();

let Student = require("../Model/students.js");


// add students...........................................
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
router.route("/").get((req,res)=>{

 Student.find().then((studentFunc)=>{
    res.json(studentFunc)
 }).catch((err)=>{
    console.log(err);
 });

});

//update ..........................................................
router.route("/upadate/:id").put(async(req,res)=>
{
let userId=req.params.id; // ulr eke parameter ekk vidihat ena id ek asign krgnnva userId kt

//desturcture
const {name,gender,age} = req.body;

const updateStudents ={
    name,
    age,
    gender,
};
const update=await Student.findByIdAndUpdate(userId,updateStudents).then
(()=>{
res.status(200).send({status :"user updated"})
}).catch((err)=>{

    console.log(err);
    res.status(500).send({status:"Error with updating data"});
});
});



router.route("/delete/:id").delete(async (req, res)=>
{
let userId= req.params.id;

await Student.findByIdAndDelete(userId).then(()=>{
    res.status(200).send({status :"User deleted"});
}).catch((err)=>{

    console.log(err.message);
    res.status(500).send({status:"erro with delect user"});
});

});




module.exports =router;
