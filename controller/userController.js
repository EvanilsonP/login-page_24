const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT;

// Check authentication / login
const authMiddleware = (req, res, next ) => {
    const token = req.cookies.token;
  
    if(!token) {
      return res.status(401).send('Unauthorized');
    }
  
    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.userId = decoded.userId;
      next();
    } catch(error) {
      res.status(401).json( { message: 'Unauthorized'} );
    }
  }


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

const dashboard = (req, res) => {
    res.render('dashboard');
};

// Register / Signup - Create user
const createUser = async (req, res) => {

    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if the username already exists in the database
        const existingUser = await User.findOne({ username });
        if(existingUser) {
            res.send('User already exists. Please choose a different username.');
            
        } else {
            const user = await User.create({ username, password: hashedPassword });
            console.log(user);
            res.redirect('home');
        }
    } 

    catch (error) {
      console.log(error);  
    };
};

// Login
const userLogin = async (req, res) => {

    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if(!user) return res.status(401).send('User not found.');

        const comparingPasswords = await bcrypt.compare(password, user.password);

        if(!comparingPasswords) return res.status(401).send('Invalid password.');

        // Saving token
        const token = jwt.sign({ userId: user._id}, jwtSecret);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/dashboard');

    } 

    catch (error) {
        console.log(error);
    };
};


module.exports = { loginPage, signupPage, homePage, createUser, userLogin, dashboard, authMiddleware };