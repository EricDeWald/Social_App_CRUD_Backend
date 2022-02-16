const { Schema, model } = require('mongoose');

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
        default: Date.now
        //Use a getter method to format the timestamp on query
        //GET FUCTION TO CHANGE TO BETTER FORMAT
    }

},
{
    toJSON: {
        getters: true,
    },
    id: false,
    }
)
const Reaction = model('reaction', reactionSchema);
module.exports = Reaction;