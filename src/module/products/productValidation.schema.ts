import { z } from "zod";
const productValidationSchema = z.object({
    name: z.string({message:"Not valid input"}),
    brand: z.string({message:"Not valid input"}),
    price: z.number().positive({ message: "Price must be a positive number" }),
    category:z.enum(["Writing", "Office Supplies", "Art Supplies", "Educational", "Technology"],{message:"Not valid input"}), 
    description: z.string({message:"Not valid input"}), // description is required and must be a string
    quantity: z.number().int({ message: "Quantity must be an integer" }).min(1, { message: "Quantity must be at least 1" }), 
    inStock: z.boolean(), 
  });

export default productValidationSchema