var express = require('express');
var router = express.Router();


/* GET signout data */
router.get('/', (req, res, next) => {
    if(req.session.ID){
        req.session.destroy()
        res.redirect("/home")
    }else{
        res.status(500).json({
            success:false,
            message:"User not logged in .. "
        })
    }
});

module.exports = router;