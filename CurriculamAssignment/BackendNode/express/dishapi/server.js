const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// Helper function to read database
const readDB = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { dishes: [] };
  }
};

// Helper function to write to database
const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8';
};

// POST /dishes - Add a new dish
app.post('/dishes', (req, res) => {
  const db = readDB();
  const newDish = {
    id: db.dishes.length > 0 ? Math.max(...db.dishes.map(d => d.id)) + 1 : 1,
    ...req.body
  };
  db.dishes.push(newDish);
  writeDB(db);
  res.status(201).json(newDish);
});

// GET /dishes - Get all dishes
app.get('/dishes', (req, res) => {
  const db = readDB();
  res.json(db.dishes);
});

// GET /dishes/:id - Get dish by ID
app.get('/dishes/:id', (req, res) => {
  const db = readDB();
  const dish = db.dishes.find(d => d.id === parseInt(req.params.id));
  if (dish) {
    res.json(dish);
  } else {
    res.status(404).json({ message: 'Dish not found' });
  }
});

// PUT /dishes/:id - Update dish by ID
app.put('/dishes/:id', (req, res) => {
  const db = readDB();
  const index = db.dishes.findIndex(d => d.id === parseInt(req.params.id));
  if (index !== -1) {
    db.dishes[index] = { ...db.dishes[index], ...req.body };
    writeDB(db);
    res.json(db.dishes[index]);
  } else {
    res.status(404).json({ message: 'Dish not found' });
  }
});

// DELETE /dishes/:id - Delete dish by ID
app.delete('/dishes/:id', (req, res) => {
  const db = readDB();
  const index = db.dishes.findIndex(d => d.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedDish = db.dishes.splice(index, 1)[0];
    writeDB(db);
    res.json(deletedDish);
  } else {
    res.status(404).json({ message: 'Dish not found' });
  }
});

// GET /dishes/get?name=<dish_name> - Search dishes by name (with partial match)
app.get('/dishes/get', (req, res) => {
  const db = readDB();
  const searchTerm = req.query.name?.toLowerCase();
  
  if (!searchTerm) {
    return res.status(400).json({ message: 'Name parameter is required' });
  }

  const matchingDishes = db.dishes.filter(d => 
    d.name.toLowerCase().includes(searchTerm)
  );

  if (matchingDishes.length > 0) {
    res.json(matchingDishes);
  } else {
    res.json({ message: 'No dishes found' });
  }
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});