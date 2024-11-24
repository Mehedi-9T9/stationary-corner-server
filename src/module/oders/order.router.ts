import express from "express"
import { orderControlars } from "./order.controlar"

const router =express.Router()

router.post("/",orderControlars.createOrder)
router.get("/revenue",orderControlars.handleTotalPrice)
export const orderRouters =router