const mongoose = require('mongoose');
     let setting = {
        connect: function() {
            let db = "mongodb://localhost/feedback";
            mongoose.set('useCreateIndex', true);
            mongoose.connect(db, {
                useNewUrlParser: true
            });
        }
    }

module.exports = setting;