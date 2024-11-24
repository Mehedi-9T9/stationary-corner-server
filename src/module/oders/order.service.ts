import { ProductModel } from "../products/product.schema";
import { orderValidSchema } from "./odersValidate.schema";
import { OrderModel } from "./order.schema";


const handleUpdateInventory=async(productId:string,quantity:number)=>{
    const product =await ProductModel.findById(productId)
    if(!product){
        throw new Error("Product Not Found")
    }
    if(product?.quantity<quantity){
        throw new Error("Product Not Available")
    }
    product.quantity -= quantity
    if(product.quantity===0){
        product.inStock=false
    }


    await product.save()
    return product





}
const createOderIntoDB=async(email:string,productId:string,quantity:number,)=>{
    const product =await ProductModel.findById(productId)
    const totalPrice = Number(product?.price) *quantity 
    const order={
        email,
        product:productId,
        quantity,
        totalPrice
    }
    const validOrder =orderValidSchema.parse(order)
    const result =await OrderModel.create(validOrder)
    return result
    
}
const handleTotalPriceIntoDB =async()=>{
    const total =await OrderModel.aggregate([
        // {$group:{_id:null,perTotalRevenue:{$sum:"$totalPrice"}}},
        {$project:{perDocTotal:{ $multiply: ["$totalPrice", "$quantity"]}}},

        {$group:{_id:null,totalRevenue:{$sum:"$perDocTotal"}}},
        {$project:{_id:0,totalRevenue:1}}
    ])
    // const result =total[0]
    return total[0]
}
export const orderServices={
    handleUpdateInventory,
    createOderIntoDB,
    handleTotalPriceIntoDB
}