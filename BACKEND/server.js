const express = require('express'); //import express
const mongoose =require('mongoose'); // import mongoose for connect db
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use((bodyParser.json()));
// db url set

const DB_URL ='mongodb+srv://test:test123@cluster0.1jqzaiu.mongodb.net/test?retryWrites=true&w=majority'
 const PORT= process.env.PORT || 8070; // create port 

app.listen(PORT, () =>{  // check server conection 

console.log(`App is runing on ${PORT}`);

} );


mongoose.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>{
    console.log('DB connectd');// check mongo db conect or not
})
.catch((err) => console.log('db not connecrt',err));


const studntsRouter = require("./routes/stuRoutes.js");
app.use("/students",studntsRouter);