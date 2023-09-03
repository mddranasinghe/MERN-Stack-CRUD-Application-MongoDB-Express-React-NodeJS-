const mongoose =require('mongoose'); 
const Schema =mongoose.Schema;

const studentSchema =new Schema(
    {
        name : {
            type :String,
            require : true
        },
        age : {
            type :Number,
            require :true
        },
        gender :{
            type :String,
            require :true
        }
    }
);



const Student = mongoose.model("Studenttable",studentSchema);// this model is function of mongoos pckge
// this paramiter hv 2 first one is table name(documant name) and second one is you created schema name 

module.exports = Student; // export the obove module it should

