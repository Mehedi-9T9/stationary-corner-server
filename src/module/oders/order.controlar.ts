import { Request, Response } from "express"
import { orderServices } from "./order.service"

const createOrder=async(req:Request,res:Response)=>{
    try {
        const {email,product:productId,quantity}=req.body
        await orderServices.handleUpdateInventory(productId,quantity)
        const result =await orderServices.createOderIntoDB(email,productId,quantity)
        res.status(200).json({
            status:true,
            message:"Order created successfully",
            data:result
        })
    } catch (error:any) {
        res.status(500).json({
            status:false,
            message:error?.message,
            data:error
        })
        
    }
}
const handleTotalPrice=async(req:Request,res:Response)=>{
    try {
        const result =await orderServices.handleTotalPriceIntoDB()
    res.status(200).json({
        status:true,
        message:"Revenue calculated successfully",
        data:result
    })
        
    } catch (error:any) {
        res.status(500).json({
            status:false,
            message:error?.message,
            data:error
        })
        
    }

}
export const orderControlars={
    createOrder,
    handleTotalPrice
}