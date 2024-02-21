const express = require('express');
const router = express.Router();

// Login
router.get('/', (req, res) => {
    res.render('login');
});

// Signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;