import express, { Request, Response } from 'express';
import cors from 'cors';
import { productRouters } from './module/products/product.router';
import { orderRouters } from './module/oders/order.router';

const app = express();

//perser
app.use(express.json());
app.use(cors());

//All Application Routes
app.use('/api/products', productRouters);
app.use('/api/orders', orderRouters);

app.get('/', (req, res) => {
  res.send('Hello Ts world!');
});

//Route Handle
app.all('*',async(req:Request,res:Response)=>{
  res.status(404).json({
    success: false,
    message: "Oops! The page you are looking for does not exist.",
    requestedUrl: req.originalUrl,
  });
})

export default app;
