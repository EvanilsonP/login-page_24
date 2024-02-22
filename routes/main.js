const express = require('express');
const router = express.Router();
const controller = require('../controller/userController.js');
const { authMiddleware }  = require('../controller/userController.js');


router.get('/', controller.loginPage);           // Login route
router.get('/signup', controller.signupPage);
router.get('/home', controller.homePage);
router.post('/signup', controller.createUser);
router.post('/login', controller.userLogin);
router.get('/dashboard', authMiddleware, controller.dashboard);
router.get('/logout', controller.logout);


module.exports = router;