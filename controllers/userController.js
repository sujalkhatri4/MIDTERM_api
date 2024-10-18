const User = require('../model/user');
const fs = require('fs')

const loadInitialData = async () => {
    try {
        const count = await User.countDocuments(); 
        if (count === 0) {
            const data = JSON.parse(fs.readFileSync('users.json', 'utf8')); 
            await User.insertMany(data); 
            console.log('Initial user data loaded');
        } else {
            console.log('User data already exists');
        }
    } catch (err) {
        console.error('Error loading initial data:', err);
    }
};
loadInitialData();
  // Get all users
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).send('Error fetching users');
    }
  };
  // Get user by ID
const getUserById = async (req, res) => {
    try {
      const user = await User.findOne({ userId: req.params.id });
      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      res.status(500).send('Error fetching user');
    }
  };

  // Get users by location
const getUsersByLocation = async (req, res) => {
    try {
      const users = await User.find({ 'userData.location': req.params.location });
      if (users.length > 0) {
        res.json(users);
      } else {
        res.status(404).send('No users found for this location');
      }
    } catch (err) {
      res.status(500).send('Error fetching users');
    }
  };

  module.exports = {
    getAllUsers,
    getUserById,
    getUsersByLocation,
  };