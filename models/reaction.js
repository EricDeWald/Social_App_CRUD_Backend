const { Schema, Types } = require('mongoose');

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
      default: Date.now
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

module.exports = reactionSchema;