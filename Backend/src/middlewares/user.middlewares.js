  const jwt = require('jsonwebtoken');

  module.exports.AuthUser =  async(req , res , next) => {

    try{
        const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({message:'UNAUTHORIZED'})
        const data = jwt.verify(token, 'Hello');
        req.user = data;
     return  next();
    }catch(err){
         res.status(401).json({message:'UNAUTHORIZED'})
          console.log(err); }
  }