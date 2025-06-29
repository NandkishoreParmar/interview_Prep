// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Add this near other imports
const authRoutes = require('./routes/auth');
// Add this near other routes
const noteRoutes = require('./routes/notes');
app.use('/api/notes', noteRoutes);
// Add this after middleware setup
app.use('/api/auth', authRoutes);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Notes App Backend');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});