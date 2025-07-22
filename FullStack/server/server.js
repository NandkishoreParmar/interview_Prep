const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require("cors")
require("dotenv").config()
require("./Models/db");
const PORT = process.env.PORT || 3000
const AuthRouter = require("./Routes/AuthRouter")

app.get("/health",(req,res)=>{
  res.send("Server is healthy")
})
app.use(bodyparser.json())
app.use(cors())

app.use('/auth',AuthRouter)

app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`)
})