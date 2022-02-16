const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now
        //GET FUNCTION TO CHANGE TO BETTER FORMAT
    },
    userName:{
        // some how this needs to referece the user that made this entry
        // type: Schema.Types.ObjectId,
        // ref: 'user',
        // required: true
    },
    reactions:[{
        type: Schema.Types.ObjectId,
        ref: 'reaction',
        required: true
    }]
},
{
    toJSON: {
        getters: true,
    },
    id: false,
    }
)
const Thought = model('thought', thoughtSchema);
module.exports = Thought;