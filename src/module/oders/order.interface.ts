import { ObjectId } from "mongoose";

export type IOrder = {
   
    email: string;
    product:ObjectId;
    quantity: number;
    totalPrice:number
  }
  