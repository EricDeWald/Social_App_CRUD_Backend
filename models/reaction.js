const { Schema} = require('mongoose');

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
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get:(createdTimeStamp) => formatter(createdTimeStamp)
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