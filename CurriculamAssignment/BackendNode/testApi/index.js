
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
  res.send("This a loading page")
})

app.get("/test", (req,res)=>{
  res.send("Welcome to the node series")
})

app.get("/about",(req,res)=>{
  res.send("This is a about page.")
})

app.get("/home", (req,res)=>{
  res.send("This is a homepage")
})

app.get("/contactus",(req,res)=>{
  res.send("This is a contact us page.")
})

app.listen(PORT,()=>{
  console.log("Server is running on 3000");
})