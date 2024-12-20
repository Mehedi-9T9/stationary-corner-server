import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
   email: { type: String, required: true },
   product: { type: Schema.Types.ObjectId, ref: "products" },
    quantity:{type: Number,required:true},
    totalPrice:{type:Number,required:true}
  },{timestamps:true});

  export const OrderModel = model<IOrder>('Order', orderSchema);
  