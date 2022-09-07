import { Document } from 'mongoose';

export interface IUsers extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  lastLogin: Date;
  role: string;
  active: boolean;
  firstName: string;
  lastName: string;
  birthday: Date;
}
