const mongoose = require("mongoose");
const schema = mongoose.Schema;

var guestSchema = new schema({
    name:{
        type:String,
        default:"someOne 👱"
    },
    email:String,
});
var guest = mongoose.model('message', guestSchema);
module.exports = guest