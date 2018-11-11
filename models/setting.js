const mongoose = require('mongoose');
const config = require('../config/conf')
     let setting = {
        connect: function() {
            let db = `mongodb://xmanali92:xmanali92@ds259463.mlab.com:59463/feedback`;
            mongoose.set('useCreateIndex', true);
            mongoose.connect(db, {
                useNewUrlParser: true
            });
        }
    }

module.exports = setting;