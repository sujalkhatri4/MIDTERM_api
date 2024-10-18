const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: Number,
  userData: {
    name: String,
    age: Number,
    location: String,
    email: String
  }
});

module.exports = mongoose.model('User', userSchema);
