var express = require('express');
var router = express.Router();
var adminData = require('../models/admin')

/* GET admin data */
router.get('/', (req, res, next) => {
    if (req.session.ID) {
        adminData.findById({_id: req.session.ID}, { password:0 , __v:0 },(err, data) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: "There is a problem in the database"
                })
            } else {
                res.status(200).json({
                    success: true,
                    data
                })
            }
        })
    }else{
        res.redirect("/home")
    }
});

// signUp

// sign in (login)


module.exports = router;