const express=require("express");
const fs=require("fs");
const mongoose =require("mongoose");
const users =require("./MOCK_DATA.json");
const { json } = require("body-parser");
const { type } = require("os");
const { log, timeStamp } = require("console");
const app =express();
const port =8000;


mongoose
.connect('mongodb://127.0.0.1:27017/ninza4u',{
})

.then(()=>console.log("MonogDb Connected"))
.catch((error)=>console.log("MongoDb Error:",error));


app.listen(port,()=>{
    console.log("Hello server");
    
});


//--------------------middleware---------------------//
app.use(express.urlencoded({extended:false}));
//--------------------middleware---------------------//

