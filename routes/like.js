var express = require('express');
var router = express.Router();
var messageData = require('../models/message')

router.post('/like/:id', (req, res, next) => {
    if (req.session.ID) {
        var target = req.params.id;
        var likeValue = req.body.like;

        messageData.findByIdAndUpdate({
            _id: target
        }, {
            $inc: {
                love: likeValue
            }
        },(err,data)=>{
            if(err){
                console.log("err" + err)
                res.json({
                    success:false,
                    message:"Some thing in update love value"
                })
            }else{
                res.json({
                    success:true,
                    // some thing not correct here 
                    //show prev love count
                    message:data.love
                })
            }
        })
    } else {
        res.redirect("/home")
    }
});


module.exports = router;