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
exports.productControlars = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productInfo = req.body.product;
        const result = yield product_service_1.productServices.createProductIntoDB(productInfo);
        res.status(200).json({
            status: true,
            message: 'product Create Successful',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productServices.getAllProductIntoDB();
        res.status(200).json({
            status: true,
            message: 'Products retrieved successfully',
            data: result,
        });
    }
    catch (error) { }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.productServices.getSingleProductIntoDB(id);
        res.status(200).json({
            status: true,
            message: 'Products retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const updateDoc = req.body.product;
        const result = yield product_service_1.productServices.updateProductIntoDB(id, updateDoc);
        res.status(200).json({
            status: true,
            message: 'Product updated successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.productServices.deleteProductIntoDB(id);
        res.status(200).json({
            status: true,
            message: 'Product updated successfully',
            data: result,
        });
    }
    catch (error) {
    }
});
exports.productControlars = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
};
