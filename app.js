require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
const db = require('./database/db.js');
const bodyParser = require("body-parser")
db(); // Connecting to database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');

// Static file
app.use(express.static("public"));

// Routes
app.use(require('./routes/main.js'));

app.listen(PORT, () => {
    console.log(`Up and running on PORT ${PORT}`);
});