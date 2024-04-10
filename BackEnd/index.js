import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import mysql from 'mysql';


const app=express();

app.use(bodyParser.json());
app.use(cors());

app.get("/pubudini",(req,res)=>{
    res.send("Welcome to the backend")
});

app.post('/login',(req,res) =>{
    //console.log(req.body)


////////////////////////////////////////////////////

//Create database connection//
const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    database:"userlogin",
    password:""
});

//Make the connection to the database//
db.connect((err)=>{
    if (err){
        console.error("Error in connecting to the database",err);
        return;
    }
    console.log('Connected to the database');
});

const query = "Select * from login"

db.query(query,(err,results)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(results);
        if(results.length>0){
            res.json({"message": "valid user"});
        }
        else {
            res.json({"message": "Invalid user"});
        }
        //res.json({"message":results});
    }
})

////////////////////////////////////////////////////
/*
    let {Username,password} = req.body
    if(Username=="Pubu" && password =="12345"){
        console.log("Valid User")
    }*/
    
})





app.listen(3000,()=>console.log("Backend is running at PORT 3000"));
