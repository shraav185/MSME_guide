const express = require('express');
const router = express.Router();
const { handleUserSignup, handleUserLogin } = require('../controllers/user.controller');
const {body} = require('express-validator');

router.post("/signup",[
    body('fullName').isLength({min:3}).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 8}).withMessage('Password must be atleast 8 characters long')
], handleUserSignup);

router.post("/login",[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 8}).withMessage('Password must be atleast 8 characters long')
], handleUserLogin);

module.exports = router;