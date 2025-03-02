import { model, models, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
}

const UserSchema = new Schema({
  clerckId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true, unique: true },
  lastname: { type: String, required: true, unique: true },
});

const User = models.User || model('User', UserSchema);

export default User;