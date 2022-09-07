import { Schema } from 'mongoose';

export const UsersSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  lastLogin: { type: Date, required: true },
  role: { type: String, required: true },
  active: { type: Boolean, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthday: { type: Date, required: true },
});
