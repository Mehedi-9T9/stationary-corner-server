import express from 'express';
import { productControlars } from './product.controlar';
const router = express.Router();

router.post('/products', productControlars.createProduct);
router.get('/products', productControlars.getAllProduct);
router.get('/products/:productId', productControlars.getSingleProduct);
router.put('/products/:productId', productControlars.updateProduct);
router.delete('/products/:productId', productControlars.deleteProduct);

export const productRouters = router;
