const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
  });

//   const Kitten = mongoose.model('Kitten', kittySchema);
  module.exports = mongoose.model('User', userSchema);