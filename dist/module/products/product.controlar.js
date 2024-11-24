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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControlars = void 0;
const product_service_1 = require("./product.service");
const productValidation_schema_1 = __importDefault(require("./productValidation.schema"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productInfo = req.body;
        //data validate with zod
        const zodValidateData = productValidation_schema_1.default.parse(productInfo);
        const result = yield product_service_1.productServices.createProductIntoDB(zodValidateData);
        res.status(200).json({
            status: true,
            message: 'product Create Successful',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error.issues[0].message,
            data: error,
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.productServices.getAllProductIntoDB(searchTerm);
        if (result.length <= 0) {
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
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: error,
        });
    }
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
        res.status(500).json({
            status: false,
            message: error.message,
            data: error,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const updateDoc = req.body;
        const result = yield product_service_1.productServices.updateProductIntoDB(id, updateDoc);
        res.status(200).json({
            status: true,
            message: 'Product updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: error,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.productServices.deleteProductIntoDB(id);
        res.status(200).json({
            status: true,
            message: 'Product deleted successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: error,
        });
    }
});
exports.productControlars = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
};
