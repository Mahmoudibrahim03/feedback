var express = require('express');
router.post('/', (req, res, next) => {
var adminData = require('../models/admin')
var bcrypt = require('bcrypt')
var router = express.Router();

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
                console.log(result)
                const hashedPass = result[0].password;
                bcrypt.compare(password, hashedPass, (err) => {
                    if (err) {
                        console.log('err in comparison hashed password .. ' + err);
                    }
                    res.status(200).json({
                        success: true,
                    })
                });
            }
        }
    })

})
module.exports = router;