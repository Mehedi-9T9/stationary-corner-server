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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_router_1 = require("./module/products/product.router");
const order_router_1 = require("./module/oders/order.router");
const app = (0, express_1.default)();
//perser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//All Application Routes
app.use('/api/products', product_router_1.productRouters);
app.use('/api/orders', order_router_1.orderRouters);
app.get('/', (req, res) => {
    res.send('Hello Ts world!');
});
//Route Handle
app.all('*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(404).json({
        success: false,
        message: "Oops! The page you are looking for does not exist.",
        requestedUrl: req.originalUrl,
    });
}));
exports.default = app;
