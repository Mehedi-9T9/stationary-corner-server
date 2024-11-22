
import { Request, Response } from 'express';
import { productServices } from './product.service';
import { FilterQuery } from 'mongoose';
import { IProduct } from './product.interface';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productInfo = req.body.product;
    const result = await productServices.createProductIntoDB(productInfo);
    res.status(200).json({
      status: true,
      message: 'product Create Successful',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductIntoDB();
    res.status(200).json({
      status: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (error) {}
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getSingleProductIntoDB(id);
    res.status(200).json({
      status: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateProduct=async(req: Request, res: Response)=>{
    try {
        const id:string= req.params.productId;
        const updateDoc=req.body.product
        const result =await productServices.updateProductIntoDB(id,updateDoc)
        res.status(200).json({
            status: true,
            message: 'Product updated successfully',
            data: result,
          });
        
        
    } catch (error) {
        console.log(error)
        
    }
}
const deleteProduct=async(req: Request, res: Response)=>{
    try {
        const id:string= req.params.productId;
        const result =await productServices.deleteProductIntoDB(id)
        res.status(200).json({
            status: true,
            message: 'Product updated successfully',
            data: result,
          });

    } catch (error) {
        
    }
}
export const productControlars = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
