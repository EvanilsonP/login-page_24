require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome!');
});


app.listen(PORT, () => {
    console.log(`Up and running on PORT ${PORT}`);
});