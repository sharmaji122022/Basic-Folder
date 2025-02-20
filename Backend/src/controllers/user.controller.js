const { UserModel } = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");

module.exports.RegisterUserController = async (req,res)=>{
 const{username , email , password }=req.body;
 if(!username || !email || !password) return res.status(400).json({messsage:'Invalid credentials'})
      const isUserExist = await UserModel.findOne({email})
      if(isUserExist) return res.status(400).json({message:'User already exist'})
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({username , email , password :hashedPassword})
        const token = jwt.sign({id:user._id , email : user.email} , "Hello")
       res.status(200).json(user, token)
}

module.exports.LoginUserController = async (req,res)=>{
    const{email , password }=req.body;
    if(!email ||!password) return res.status(400).json({messsage:'Invalid credentials'})
        const user = await UserModel.findOne({email})
        if(!user) return res.status(404).json({message:'User not found'})
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(401).json({message:'Invalid credentials'})
                const token = jwt.sign({id:user._id , email : user.email} , "Hello")
                res.status(200).json({user, token})
}