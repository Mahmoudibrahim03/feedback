var express = require('express');
var bcrypt = require('bcrypt')
var router = express.Router();
var adminData = require('../models/admin')


/* GET admin data */
router.post('/', (req, res, next) => {
    const username = req.body.username,
        password = req.body.password,
        email = req.body.email,
        facebook = req.body.facebookLink,
        twitter = req.body.twitterLink,
        github = req.body.githubLink;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.log(err);
        } else {
            let newAdmin = new adminData({
                username,
                password: hash,
                email,
                socialLinks: {
                    facebook,
                    twitter,
                    github
                }
            })
            newAdmin.save((err) => {
                if (err) {
                    console.log('saving in databse err' + err);
                    return err
                } else {
                    console.log('saved successfully');
                    res.status(200).json({
                        success: true,
                    })
                }
            })
        }
    });

});

// Get all admin data 


module.exports = router;