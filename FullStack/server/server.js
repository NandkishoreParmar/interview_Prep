const express = require("express")
const app = express()
require("dotenv").config()
require("./Models/db");
const PORT = process.env.PORT || 3000

app.get("/users",(req,res)=>{
  res.send("Server is healthy")
})

app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`)
})