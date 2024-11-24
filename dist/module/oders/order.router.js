"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouters = void 0;
const express_1 = __importDefault(require("express"));
const order_controlar_1 = require("./order.controlar");
const router = express_1.default.Router();
router.post("/", order_controlar_1.orderControlars.createOrder);
router.get("/revenue", order_controlar_1.orderControlars.handleTotalPrice);
exports.orderRouters = router;
