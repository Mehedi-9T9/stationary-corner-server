import express from 'express';
import { productControlars } from './product.controlar';
const router = express.Router();

router.post('/', productControlars.createProduct);
router.get('/', productControlars.getAllProduct);
router.get('/:productId', productControlars.getSingleProduct);
router.put('/:productId', productControlars.updateProduct);
router.delete('/:productId', productControlars.deleteProduct);

export const productRouters = router;
