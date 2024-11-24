"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouters = void 0;
const express_1 = __importDefault(require("express"));
const product_controlar_1 = require("./product.controlar");
const router = express_1.default.Router();
router.post('/', product_controlar_1.productControlars.createProduct);
router.get('/', product_controlar_1.productControlars.getAllProduct);
router.get('/:productId', product_controlar_1.productControlars.getSingleProduct);
router.put('/:productId', product_controlar_1.productControlars.updateProduct);
router.delete('/:productId', product_controlar_1.productControlars.deleteProduct);
exports.productRouters = router;
