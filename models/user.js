const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: { 
        type:String,
        required: true,
        thoughts: [{type: Schema.Types.ObjectId,ref: 'thoughts'}]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            // not sure how to use this regex here or how to impliment as custom validation function
            // regular expression: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`
        }

    },
    // array of _id values referencing the Thought model
    // not sure that this is currently an array
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
        required: true
    }],
    // array of _id values referencing the Friends model
    // not sure that this is currently an array
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'friends',
        required: true
    }],
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return `${this.friends}`;
  })

const User = model('user', userSchema);

module.exports = User;
