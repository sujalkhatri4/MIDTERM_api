const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });