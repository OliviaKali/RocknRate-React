const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const login = require('../client/src/pages/login');

//User Model
const User = require("../models/User");

//Login Page
// router.get('/users/login', (req, res) => res.render("login"));

// //Register Page
// router.get('/users/register', (req, res) => res.send('Register'));

//Register Handle
router.post('/users/register', (req, res) => {
    
    const { name, email, password, password2 } = req.body;
    let errors = [];
    
    //Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields.'});
    }

    //Check passwords match
    if (password !== password2) {
        errors.push({msg: 'Passwords do not match.'});
    }

    //Check pass length

    if (password.length < 6) {
        errors.push({msg: 'Password should be at least 6 characters.'});
    }

    if (errors.length > 0) {
        res.render('register',  {
            errors, name, email, password, password2
        });
    }
        else {
            //Validation passed
            User.findOne({ email: email})
            .then(user => {
                if(user) {
                    //user exists 
                    errors.push({ msg: 'Email is already registered '});
                    res.render('register',  {
                        errors, name, email, password, password2
                    });
                } else {
                    const newUser = new User({
                        name, email, password
                    });
                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => 
                    {
                        if(err) throw err;
                        //Set password to hashed
                        newUser.password = hash;
                        //Save user
                        newUser.save()
                        .then(user => {
                            req.flash('success_msg', 'You are now registered and can log in');
                            res.redirect('/users/login');
                        })
                        .catch(err => console.log(err));
                    }))
                }
            });
       
       
    }
    
});

//Login Handle
router.post('/users/login', (req, res, next) => {
    passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
    }) (req, res, next);
})

//Logout Handle
router.get('/logout', (req, res) =>{
req.logout();
req.flash('success_msg', 'You are logged out');
res.redirect('/users/login')

})

module.exports = router;