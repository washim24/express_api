const express=require("express");

const {connectMongoDb} =require("./connection");
const userRouter =require("./routes/user");
const {logReqRes} =require("./middlewares");


const users =require("./MOCK_DATA.json");
const { json } = require("body-parser");
const { type } = require("os");
const { log, timeStamp } = require("console");

const { connect } = require("http2");
const app =express();
const port =8000;

//connection
connectMongoDb('mongodb://127.0.0.1:27017/ninza4u');

//middleware plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

//routes
app.use("/user",userRouter);
app.listen(port,()=>{
    console.log("Hello server");
    
});