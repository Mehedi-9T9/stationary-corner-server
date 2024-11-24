"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const product_schema_1 = require("../products/product.schema");
const odersValidate_schema_1 = require("./odersValidate.schema");
const order_schema_1 = require("./order.schema");
const handleUpdateInventory = (productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_schema_1.ProductModel.findById(productId);
    if (!product) {
        throw new Error("Product Not Found");
    }
    if ((product === null || product === void 0 ? void 0 : product.quantity) < quantity) {
        throw new Error("Product Not Available");
    }
    product.quantity -= quantity;
    if (product.quantity === 0) {
        product.inStock = false;
    }
    yield product.save();
    return product;
});
const createOderIntoDB = (email, productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_schema_1.ProductModel.findById(productId);
    const totalPrice = Number(product === null || product === void 0 ? void 0 : product.price) * quantity;
    const order = {
        email,
        product: productId,
        quantity,
        totalPrice
    };
    const validOrder = odersValidate_schema_1.orderValidSchema.parse(order);
    const result = yield order_schema_1.OrderModel.create(validOrder);
    return result;
});
const handleTotalPriceIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const total = yield order_schema_1.OrderModel.aggregate([
        // {$group:{_id:null,perTotalRevenue:{$sum:"$totalPrice"}}},
        { $project: { perDocTotal: { $multiply: ["$totalPrice", "$quantity"] } } },
        { $group: { _id: null, totalRevenue: { $sum: "$perDocTotal" } } },
        { $project: { _id: 0, totalRevenue: 1 } }
    ]);
    // const result =total[0]
    return total[0];
});
exports.orderServices = {
    handleUpdateInventory,
    createOderIntoDB,
    handleTotalPriceIntoDB
};
