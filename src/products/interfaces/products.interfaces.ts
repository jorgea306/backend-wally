import { Document } from 'mongoose';

export interface IProducts extends Document {
  SKU: string;
  code?: number;
  name: string;
  description?: string;
  pictures: string[];
  price: number;
  currency: string;
}
