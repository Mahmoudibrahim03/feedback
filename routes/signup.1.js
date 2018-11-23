var express = require('express');
var router = express.Router();
var adminData = require('../models/admin')
var controller = require("../controller/modules")
/* GET admin data */
router.post('/',async (req, res, next) => {
    const username = req.body.username,
        password = req.body.password,
        email = req.body.email,
        facebook = req.body.facebookLink,
        twitter = req.body.twitterLink,
        github = req.body.githubLink;
    const hashed = await controller.hashingPass(password)
    if (hashed) {
        let newAdmin = new adminData({
            username,
            password: hashed,
            email,
            socialLinks: {
                facebook,
                twitter,
                github
            }
        })
        try {
            await newAdmin.save();
            console.log('saved successfully');
            res.json({
                success:true,   
            })
        } catch (err) {
            return err;
        }
    }else{
        console.log('there is hashing err')
        return err
    }

});

module.exports = router;