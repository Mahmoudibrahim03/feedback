const mongoose = require("mongoose");
const schema = mongoose.Schema;

var adminSchema = new schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required:true,
        unique:true,
    },
    photo:{
        type:String,
        default:'https://goo.gl/dwQEYC',
    },
    socialLinks:{
        facebook:{
            type:String,
        },
        twitter:{
            type:String,
        },
        github:{
            type:String,
        },
    }
});
var admin = mongoose.model('admin', adminSchema);
module.exports = admin