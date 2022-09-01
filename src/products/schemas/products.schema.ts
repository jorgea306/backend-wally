import { Schema } from 'mongoose';

export const ProductsSchema = new Schema({
  SDK: String,
  code: Number,
  name: String,
  description: String,
  pictures: Array,
  price: Number,
  currency: String,
});
