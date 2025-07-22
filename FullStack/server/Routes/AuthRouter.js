const router = require("express").Router()
const signupValidation = require("../Middlewares/AuthValidation")
const signup = require("../Controllers/AuthController")
router.post('/login',(req,res)=>{
  res.send("Login Successful .... ")
})

router.post('/signup',signupValidation,signup)              //  middleware, controller   signup


module.exports = router;
