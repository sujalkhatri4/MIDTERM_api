const User = require('../model/user');
const fs = require('fs')

// Load initial data from users.json
const loadInitialData = async () => {
    const data = JSON.parse(fs.readFileSync('users.json'));
    await User.insertMany(data);
    console.log('Initial user data loaded');
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