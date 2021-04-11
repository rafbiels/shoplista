import {model, Model, Schema, Document} from 'mongoose';

interface IUser extends Document {
  username:  string;
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true
});

const User: Model<IUser> = model('User', UserSchema);

export {IUser, User};
