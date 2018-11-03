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

  let content = req.body.content;

  console.log(content)
  let newMessage = new messagesData({
    content:{
      value : content
    }, 
  })

  newMessage.save(function(err, resp) {
    if (err) {
      console.log(err);
      res.send({
        message: 'something went wrong'
      });
    } else {
      res.send({
        message: 'the appointment has been saved'
      });
    }
  });
})

module.exports = router;