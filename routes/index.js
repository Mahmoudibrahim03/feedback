var express = require('express');
var messagesData = require('../models/message')
var adminData = require('../models/admin')
// var guestData = require('../models/guest')
var router = express.Router();

/*get all messages*/

router.get('/home', (req, res, next) => {
  console.log('with out parameters ')
});


/* get specific post */
router.get('/home/:id', (req, res, next) => {
  console.log(req.params)
});



router.post('/home', (req, res, next) => {
  let mgcontent = req.body.content;

  if (mgcontent.length > 1 && mgcontent) {
    let newMessage = new messagesData({
      content: {
        value: mgcontent
      },
    })

    newMessage.save(function (err, resp) {
      if (err) {
        console.log('err' + err);
        res.status(500).send({
          success: false,
          message: 'something went wrong in database .. 👎💔'
        });
      } else {
        res.status(200).send({
          success: true,
          message: 'Message had been saved 🔥🔥'
        });
      }
    });
  } else {
    res.status(500).send({
      success: false,
      message: 'something went wrong 👎💔'
    });
  }

})

module.exports = router;