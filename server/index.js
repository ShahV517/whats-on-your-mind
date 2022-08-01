const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialize express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');


// Route middleware
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Connect to mongodb
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(8000, () => {
        console.log('Server started on port 8000');
    });
    })
    .catch(err => console.log(err));