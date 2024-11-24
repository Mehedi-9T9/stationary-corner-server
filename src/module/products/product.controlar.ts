
import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './productValidation.schema';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productInfo = req.body;
    //data validate with zod
    const zodValidateData =productValidationSchema.parse(productInfo)



    
    const result = await productServices.createProductIntoDB(zodValidateData);
    res.status(200).json({
      status: true,
      message: 'product Create Successful',
      data: result,
    });
  } catch (error:any) {
    res.status(400).json({
      status: false,
      message: error.issues[0].message,
      data: error,
    });
    
  }
};
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.getAllProductIntoDB(searchTerm);
    if(result.length<=0){
      res.status(404).json({
        status: false,
        message: 'Products not fount',
        data: result,
      }); 
    }
    res.status(200).json({
      status: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      status: false,
      message: error.message,
      data: error,
    });
  }
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
  } catch (error:any) {
    res.status(500).json({
      status: false,
      message: error.message,
      data: error,
    });
  }
};
const updateProduct=async(req: Request, res: Response)=>{
    try {
        const id:string= req.params.productId;
        const updateDoc=req.body
        const result =await productServices.updateProductIntoDB(id,updateDoc)
        res.status(200).json({
            status: true,
            message: 'Product updated successfully',
            data: result,
          });
        
        
    } catch (error:any) {
      res.status(500).json({
        status: false,
        message: error.message,
        data: error,
      });
        
    }
}
const deleteProduct=async(req: Request, res: Response)=>{
    try {
        const id:string= req.params.productId;
        const result =await productServices.deleteProductIntoDB(id)
        res.status(200).json({
            status: true,
            message: 'Product deleted successfully',
            data: result,
          });

    } catch (error:any) {
      res.status(500).json({
        status: false,
        message: error.message,
        data: error,
      });
        
    }
}
export const productControlars = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
