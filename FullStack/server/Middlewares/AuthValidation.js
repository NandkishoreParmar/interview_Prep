const Joi = require("joi");
const UserModel = require("../Models/user");

const signupValidation = (req,res,next)=> {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(4).max(100).required()
  })

  const {error} = schema.validate(req.body);
  if(error){
    return res.status(400).json({message:"Bad request",error})
  }
  next()
}

const loginValidation = (req,res,next)=> {
    const schema = Joi.object({
      email: Joi.string().email().max(100).required(),
      password:Joi.string().min(4).max(100).required()
    })
    const {error} = schema.validate(req.body);
}

module.exports = signupValidation;