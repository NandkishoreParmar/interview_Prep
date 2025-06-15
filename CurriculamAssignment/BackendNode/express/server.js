const express = require('express');
const app = express();
const PORT = 3000;

// Route for home page
app.get('/home', (req, res) => {
    res.send('<h1>Welcome to Home Page</h1>');
});

// Route for about us page (JSON response)
app.get('/aboutus', (req, res) => {
    res.json({ "message": "Welcome to About Us" });
});

// Route for contact us page
app.get('/contactus', (req, res) => {
    const contactDetails = {
        email: 'contact@example.com',
        phone: '+1 (123) 456-7890',
        address: '123 Main St, City, Country'
    };
    res.send(`
        <h2>Contact Us</h2>
        <p>Email: ${contactDetails.email}</p>
        <p>Phone: ${contactDetails.phone}</p>
        <p>Address: ${contactDetails.address}</p>
    `);
});

// Handle 404 - Not Found
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});