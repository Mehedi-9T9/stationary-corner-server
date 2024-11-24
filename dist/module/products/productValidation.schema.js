"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ message: "Not valid input" }),
    brand: zod_1.z.string({ message: "Not valid input" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    category: zod_1.z.enum(["Writing", "Office Supplies", "Art Supplies", "Educational", "Technology"], { message: "Not valid input" }),
    description: zod_1.z.string({ message: "Not valid input" }), // description is required and must be a string
    quantity: zod_1.z.number().int({ message: "Quantity must be an integer" }).min(1, { message: "Quantity must be at least 1" }),
    inStock: zod_1.z.boolean(),
});
exports.default = productValidationSchema;
