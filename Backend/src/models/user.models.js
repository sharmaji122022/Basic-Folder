const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    posts:[
      {  type: mongoose.Schema.Types.ObjectId,
        ref: 'post'  // reference to Post model
      }
    ]
})

module.exports.UserModel = mongoose.model('User', UserSchema);