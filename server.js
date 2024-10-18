const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/userController');
const path = require('path');

const app = express();
const port = 3000;

// MongoDB connection string
const mongoURI = 'mongodb+srv://veroproduction4:sujalapi@cluster4.rmdge.mongodb.net/';

// Connection to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/users', userRoutes.getAllUsers);
app.get('/api/users/:id', userRoutes.getUserById);
app.get('/api/users/location/:location', userRoutes.getUsersByLocation);

// Serve index.html at the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
