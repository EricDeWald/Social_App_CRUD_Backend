const { Schema, model } = require('mongoose');
const formatter = require("../utils/dateformat.js")
const reactionSchema = require("./reaction.js")

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        default: " ",
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get:(createdTimeStamp) => formatter(createdTimeStamp)
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