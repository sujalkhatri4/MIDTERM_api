const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: Number, unique: true },
    userData: {
      name: String,
      age: Number,
      location: String,
      email: String
    }
  });
  

module.exports = mongoose.model('User', userSchema);
