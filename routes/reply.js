const express = require('express');
const router = express.Router();
const messagesData = require('../models/message')




/* GET admin data */
router.post('/:id/reply', (req, res, next) => {
    if (req.session.ID) {
        messagesData.findOneAndUpdate({
            _id: req.params.id
        }, {
            reply: {
                value: req.body.reply,
                date: new Date().toISOString()
            } 
        }, (err) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    success: false,
                    messages: "What the f*ck is tat 💩💩"
                })
            } else {
                res.status(200).json({
                    success: true,
                })
            }
        })
    }
});



// Get all admin data 


module.exports = router;