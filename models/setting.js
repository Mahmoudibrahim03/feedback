const mongoose = require('mongoose');
const config = require('../config/conf')
     let setting = {
        connect: function() {
            let db = config.dbLink;
            mongoose.set('useCreateIndex', true);
            mongoose.connect(db, {
                useNewUrlParser: true
            });
        }
    }

module.exports = setting;