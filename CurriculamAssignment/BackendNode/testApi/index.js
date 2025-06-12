
const express = require("express");
const app = express();
const fs = require('fs');
const PORT = 3000;
app.use(express.json())
app.get("/home",(req,res)=>{
  res.send("This a loading page")
})

function ReadFile(){
  const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
  // console.log(courses);
  const course = data.courses;
}

app.post("/login",(req,res)=>{
  // let data = req.body;
  // console.log("req data", data)
  res.status(201).json({msg:"login successful",data})
})

app.get("/read-data",(req,res)=>{
  ReadFile()
  res.status(200).json({msg:"Data Readed",course})
})

app.listen(PORT,()=>{
  console.log("Server is running on 3000");
})