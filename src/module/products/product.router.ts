import express from "express"
import { productControlars } from "./product.controlar"
const router = express.Router()

router.post("/products",productControlars.createProduct)
export const productRouters=router
































