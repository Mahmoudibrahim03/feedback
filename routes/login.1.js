const express = require('express');
const adminData = require('../models/admin')
const controller = require('../controller/modules')
const router = express.Router();
router.post('/', async (req, res, _next) => {
    const username = req.body.username,
        password = req.body.password;
    const verifiedAdmin = await controller.checkUser(username, password, adminData);
    if (verifiedAdmin) {
        req.session.ID = verifiedAdmin;
        res.status(200).json({
            success: true,
            message: 'login is correct'
        })
    } else {
        res.status(500).json({
            success: false,
            message: 'login data is not correct'
        })
    }
})
module.exports = router;