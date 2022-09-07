const express=require("express");

const app=express();

const mongoose=require("mongoose");

const path=require("path");

require("dotenv").config();

app.use(express.static(path.join(__dirname,'/public')));

const PORT=process.env.PORT || 7080;

app.use(express.json());

app.use(express.urlencoded({extended:false}));

require("./src/connections/dbconnection/dbconnection");

app.set('views',path.join(__dirname,'src/api/views'));
app.set('view engine','ejs');

const router=require("./src/api/router/router");

app.use('/',router);

app.listen(PORT,()=>{
    console.log(`--- server start on PORT --- ${PORT} ---`);
});