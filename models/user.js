const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: { 
        type:String,
        required: true,
        thoughts: [{type: Schema.Types.ObjectId,
            ref: 'thoughts'}],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter valid e-mail."]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'friends',
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
    return `${this.friends.length}`;
  })

const User = model('user', userSchema);

module.exports = User;
