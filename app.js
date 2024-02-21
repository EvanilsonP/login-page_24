require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

app.set('view', 'engine');

app.use(require('./routes/main.js'));

app.listen(PORT, () => {
    console.log(`Up and running on PORT ${PORT}`);
});