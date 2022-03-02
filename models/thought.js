const { Schema, model } = require('mongoose');
const {formatDate} = require("../utils/dateformat")
const reactionSchema = require("./reaction.js")

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get:(createdTimeStamp) => formatDate(createdTimeStamp)
    },
    userName:{
        type: String,
        required: true
    },
    reactions:[reactionSchema]
},
{
    toJSON: {
        getters: true,
    },
    id: false,
}
)

thoughtSchema
  .virtual('reactionCount')
  .get(function() {
    return `${this.reactions.length}`;
  })

const Thought = model('thought', thoughtSchema);
module.exports = Thought;