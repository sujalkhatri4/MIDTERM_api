const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/userController');

const app = express();
const port = 3000;

// MongoDB connection string
const mongoURI = 'mongodb+srv://veroproduction4:sujalapi@cluster4.rmdge.mongodb.net/';
// Connection  to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  // Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes 
// route to get all the users
app.get('/api/users', userRoutes.getAllUsers);
//route to get users by id
app.get('/api/users/:id', userRoutes.getUserById);
// route to get users by location 
app.get('/api/users/location/:location', userRoutes.getUsersByLocation);



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });