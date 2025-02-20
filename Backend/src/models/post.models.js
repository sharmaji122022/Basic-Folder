const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    caption:{type:String},
    image:{type:String},
    // likes:{type:Number,default:0},
    // comments:{type:Number,default:0},
    timestamp:{type:Date,default:Date.now}
})