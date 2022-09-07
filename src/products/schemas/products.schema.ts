import { Schema } from 'mongoose';

export const ProductsSchema = new Schema({
  SKU: { type: String, required: true },
  code: { type: Number, required: false },
  name: { type: String, required: true },
  description: { type: String, required: false },
  pictures: { type: Array, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});
