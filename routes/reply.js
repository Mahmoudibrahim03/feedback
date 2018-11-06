var express = require('express');
var router = express.Router();
var adminData = require('../models/admin')
var messagesData = require('../models/message')
/* GET admin data */
router.post('/reply/:id', (req, res, next) => {
    if (req.session.ID) {
        console.log(req.body.reply, req.params.id)

        // messagesData.findOneAndUpdate({id:req.params.id},{
        //     reply:{
        //         content:req.body.reply,
        //         date: Date.now
        //     }
        // })

        messagesData.findOneAndUpdate({
            _id: req.params.id
        }, {
            reply: {
                value: req.body.reply,
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