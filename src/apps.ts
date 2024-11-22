import express from 'express';
import cors from 'cors';
import { productRouters } from './module/products/product.router';

const app = express();

//perser
app.use(express.json());
app.use(cors());

//All Application Routes
app.use('/api/', productRouters);

app.get('/', (req, res) => {
  res.send('Hello Ts world!');
});

export default app;
