import { IProduct } from "./product.interface"
import { ProductModel } from "./product.schema"

const createProductIntoDB =async(productData:IProduct)=>{
    const product =new ProductModel(productData)
    const result =await product.save()
    return result

}
const getAllProductIntoDB =async(searchTerm:any)=>{
    
    if(searchTerm){
        const products = await ProductModel.find({
            $or: [
              { name: { $regex: searchTerm, $options: 'i' } },
              { brand: { $regex: searchTerm, $options: 'i' } },
              { category: { $regex: searchTerm, $options: 'i' } },
            ],
          });
          return products
    }else{
        const result =await ProductModel.find()
        return result
    

    }
    
   
}
const getSingleProductIntoDB=async(id:string)=>{
    const result =await ProductModel.findOne({_id:id})
    return result
}
const updateProductIntoDB =async(id:string,updateDoc:{price:number,quantity:number})=>{
    const product =await ProductModel.findOne({_id:id})
    if(!product){
        throw new Error("Product Not Found")
    }
    const filter={_id:id}
    const result =await ProductModel.findOneAndUpdate(filter,updateDoc)
    return result


}
const deleteProductIntoDB=async(id:string)=>{
    const product =await ProductModel.findOne({_id:id})
    if(!product){
        throw new Error("Product Not Found")
    }
    const filter ={_id:id}
    const result =await ProductModel.deleteOne(filter)
    return result
}

export const productServices ={
    createProductIntoDB,
    getAllProductIntoDB,
    getSingleProductIntoDB,
    updateProductIntoDB,
    deleteProductIntoDB
}