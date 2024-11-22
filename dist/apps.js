"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_router_1 = require("./module/products/product.router");
const app = (0, express_1.default)();
//perser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//All Application Routes
app.use("/api/", product_router_1.productRouters);
app.get('/', (req, res) => {
    res.send('Hello Ts world!');
});
exports.default = app;
