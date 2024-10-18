const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MongoDB connection string
const mongoURI = 'mongodb+srv://veroproduction4:sujalapi@cluster4.rmdge.mongodb.net/';
// Connection  to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });