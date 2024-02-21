const User = require('../models/User.js');


const loginPage =  (req, res) => {
    res.render('login');
};

const signupPage = (req, res) => {
    res.render('signup');
};

// Render home page after signing up
const homePage = (req, res) => {
    res.render('home');
};

// Register / Signup - Create user
const createUser = async (req, res) => {

    try {
        const { username, password } = req.body;
        const user = await User.create({ username, password });
        res.redirect('home');
    } 

    catch (error) {
      console.log(error);  
    };
};


module.exports = { loginPage, signupPage, homePage, createUser };