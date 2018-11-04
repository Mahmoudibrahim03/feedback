var express = require('express');
var router = express.Router();
var adminData = require('../models/admin')


/* GET admin data */
router.get('/', (req, res, next) => {
    adminData.find({}, (err, data) => {
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
});

// Get all admin data 


module.exports = router;