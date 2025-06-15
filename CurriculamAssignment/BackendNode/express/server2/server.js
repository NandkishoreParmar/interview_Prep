const express = require('express');
const app = express();
const PORT = 3000;

// Dummy user data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Bob Smith", email: "bob@example.com" }
];

// Route to get a single user
app.get('/users/get', (req, res) => {
  res.json(users[0]); // Return first user
});

// Route to get list of users
app.get('/users/list', (req, res) => {
  res.json(users); // Return all users
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});