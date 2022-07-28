import express from 'express';
import 'dotenv/config';
import { categoriesRoutes } from './routes/categories.routes';

const host = process.env.HOST
const port = process.env.PORT

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(port, () => console.log(`Server is running in ${host}:${port} `));