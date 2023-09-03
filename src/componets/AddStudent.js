import React,{useState} from 'react';
import axios from 'axios';

export default function AddStudent()
{

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");

function sendData(event)
{
  event.preventDefault();

  const newStudents ={
name,
age,
gender,

  };

  axios.post("http://localhost:8070/students/add",newStudents).then(()=>{

  alert("Studnts Added");
  }).catch((err)=>{
    alert("erro");
  });
}

    return(

<div classNam='container'>
<form onSubmit={sendData}>


  <div className="form-group">
    <label for="name">Students Name :</label>
    <input type="text" className="form-control" id="name"  placeholder="Enter Student Name" 
    onChange={(event)=>{
     setName(event.target.value);
    }}/>


  </div>
  <div className="form-group">
    <label for="gender">Gender :</label>
    <input type="text" className="form-control" id="gender" placeholder="Gender"   onChange={(event)=>{
     setGender(event.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="age">Age :</label>
    <input type="text" className="form-control" id="age" placeholder="Age"   
    onChange={(event)=>{
     setAge(event.target.value);
    }}/>

  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
         
  )
}