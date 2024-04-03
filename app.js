const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 

app.use(express.json());
app.use(bodyParser.json());

// Importing my controllers
const registrationController = require('./controllers/registration_controller');

// Routes 
app.post('/api/register', registrationController.register); 

// Starting the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
