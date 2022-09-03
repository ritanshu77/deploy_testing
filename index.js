const express=require("express");

const app=express();

const mongoose=require("mongoose");

require("dotenv").config();

const PORT=process.env.port;

app.use(express.json());

app.use(express.urlencoded({extended:false}));

require("./src/connections/dbconnection/dbconnection");

const router=require("./src/api/router/router");

app.use('/',router);

app.listen(PORT,()=>{
    console.log(`--- server start on PORT --- ${PORT} ---`);
});