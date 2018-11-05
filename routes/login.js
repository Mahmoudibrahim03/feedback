var express = require('express');
var adminData = require('../models/admin')
var bcrypt = require('bcrypt')
var router = express.Router();
router.post('/', (req, res, next) => {
    const username = req.body.username,
        password = req.body.password;
    adminData.find({
        username
    }, (err, result) => {
        if (err) {
            console.log('Database err' + err);
            res.status(500).json({
                success: false,
                message: err
            })
        } else {
            if (result.length == 0) {
                res.status(404).json({
                    success: false,
                    message: "userName not found .. "
                })
            } else {
                const hashedPass = result[0].password;
                bcrypt.compare(password, hashedPass, (err) => {
                    if (err) {
                        res.status(500).json({
                            success: false,
                            message:'login data is not correct'
                        })
                    }
                    req.session.ID = result[0].id;
                    res.status(200).json({
                        success: true,
                        message:'login is correct'
                    })
                });
            }
        }
    })
})
module.exports = router;