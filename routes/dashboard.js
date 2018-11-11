var express = require('express');
var router = express.Router();
var messagesData = require('../models/message')

router.post('/visable/:id', (req, res, next) => {
    if (req.session.ID) {
        let state = req.body.visable;
        if (state) {
            messagesData.findOneAndUpdate({
                _id: req.params.id
            }, {
                visable: req.body.visable
            }, (err) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        success: false,
                        messages: "What the f*ck is that 💩💩"
                    })
                } else {
                    res.status(200).json({
                        success: true,
                    })
                }
            })
        } else {
            res.status(500).json({
                success: false,
                messages: "What the f*ck is that it's not true or false !!  💩💩"
            })
        }
    }
});

// Get all admin data 


module.exports = router;