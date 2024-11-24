import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true,enum:['Writing','Office Supplies','Art Supplies','Educational','Technology'] },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const ProductModel = model<IProduct>('Product', productSchema);
