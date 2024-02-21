const User = require('../models/User.js');


const loginPage =  (req, res) => {
    res.render('login');
};

const signupPage = (req, res) => {
    res.render('signup');
};

const homePage = (req, res) => {
    res.render('home');
};

// Register / Signup - Create user
const createUser = async (req, res) => {
    try {
        const { name, password } = req.body;

        try {
            const user = await User.create({ name, password });
            console.log(user);
            res.redirect('home');

        } catch (error) {
            console.log(error);
        };
    } 

    catch (error) {
        console.log(error);
    };
};


module.exports = { loginPage, signupPage, homePage, createUser };