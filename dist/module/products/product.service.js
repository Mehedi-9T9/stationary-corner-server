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
exports.productServices = void 0;
const product_schema_1 = require("./product.schema");
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_schema_1.ProductModel(productData);
    const result = yield product.save();
    return result;
});
const getAllProductIntoDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const products = yield product_schema_1.ProductModel.find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { brand: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        });
        return products;
    }
    else {
        const result = yield product_schema_1.ProductModel.find();
        return result;
    }
});
const getSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_schema_1.ProductModel.findOne({ _id: id });
    return result;
});
const updateProductIntoDB = (id, updateDoc) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_schema_1.ProductModel.findOne({ _id: id });
    if (!product) {
        throw new Error("Product Not Found");
    }
    const filter = { _id: id };
    const result = yield product_schema_1.ProductModel.findOneAndUpdate(filter, updateDoc);
    return result;
});
const deleteProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_schema_1.ProductModel.findOne({ _id: id });
    if (!product) {
        throw new Error("Product Not Found");
    }
    const filter = { _id: id };
    const result = yield product_schema_1.ProductModel.deleteOne(filter);
    return result;
});
exports.productServices = {
    createProductIntoDB,
    getAllProductIntoDB,
    getSingleProductIntoDB,
    updateProductIntoDB,
    deleteProductIntoDB
};
