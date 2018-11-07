var express = require('express');
var messagesData = require('../models/message')
var router = express.Router();

/*get all messages*/

router.get('/home', (req, res, next) => {
  messagesData.find({visable:true}, (err, messages) => {
    if (messages.length != 0) {
      res.status(200).json({
        success: true,
        messages,
      })
    } else {
      res.status(500).json({
        success: false,
        message:"There is no messages yet .. ⌛ ⌛"
      })
    }
  })
});


/* get specific post */
router.get('/home/:id', (req, res, next) => {
  targetId = req.params.id;
  messagesData.find({
    _id: targetId
  }, (err, messages) => {
    if (err) {
      res.status(404).json({
        success: false,
        message: "Message not found 🏴🏴"
      })
    } else {
      res.status(200).json({
        success: true,
        messages,
      })

    }
  })
});

router.post('/home', (req, res, next) => {
  let mgcontent = req.body.content;

  if (mgcontent.length > 1 && mgcontent.length <= 1500) {
    let newMessage = new messagesData({
      content: {
        value: mgcontent
      },
    })

    newMessage.save(function (err, resp) {
      if (err) {
        console.log('err' + err);
        res.status(500).json({
          success: false,
          message: 'something went wrong in database .. 👎💔'
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Message had been saved 🔥🔥',
          value: resp.content.value,
        });
      }
    });
  } else {
    res.status(500).json({
      success: false,
      message: 'Message not able to be more than 1500 or less than 1 👎💔'
    });
  }

})

module.exports = router;