var express = require('express');
var router = express.Router();
var adminData = require('../models/admin')
var messagesData = require('../models/message')
/* GET admin data */
router.post('/reply/:id', (req, res, next) => {
    if (req.session.ID) {
        messagesData.findOneAndUpdate({
            _id: req.params.id
        }, {
            reply: {
                value: req.body.reply,
                date: new Date().toISOString()
            }
        }, (err, data) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    success: false,
                    messages: "What the f*ck is that 💩💩"
                })
            } else {
                res.status(200).json({
                    success: true,
                    messages: data
                })
            }
        })
    }
});

// Get all admin data 


module.exports = router;