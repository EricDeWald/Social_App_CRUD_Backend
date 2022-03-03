const { Schema, Types } = require('mongoose');
const {formatDate} = require("../utils/dateformat.js")

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    userName:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get:(createdTimeStamp) => formatDate(createdTimeStamp)
    }
},
{
    toJSON: {
        getters: true,
    },
    id: false,
    }
)
module.exports = reactionSchema;