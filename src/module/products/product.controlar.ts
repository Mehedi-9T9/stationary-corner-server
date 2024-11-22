import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct =async(req:Request, res:Response)=>{
   try {

    const productInfo =req.body.product
    const result =await productServices.createProductIntoDB(productInfo)
    res.status(200).json({
        status:true,
        message:"product Create Successful",
        data: result
    })
    
   } catch (error) {
    console.log(error);
    
   }

}
export const productControlars ={
    createProduct,
}