const mongoose = require("mongoose");
const schema = mongoose.Schema;

var messageSchema = new schema({
    message: {
        content: {
            value: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now
            }
        },
        reply:{
            value:  String,
            date: {
                type: Date,
                default: Date.now
            }
        },
        visable:{
            type:Boolean,
            default:true,
        },
        love:{
            type:Number,
            default:0
        },
        readStatus:{
            type:Boolean,
            default:false,
        }
    }
});
var message = mongoose.model('message', messageSchema);
module.exports = message