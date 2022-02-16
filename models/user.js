const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: { 
        type:String,
        required: true,
        thoughts: [{type: Schema.Types.ObjectId,
            ref: 'thoughts'}]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: 
            [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter valid e-mail."]
    },
    // array of _id values referencing the Thought model
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
        required: true
    }],
    // array of _id values referencing the Friends model
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
