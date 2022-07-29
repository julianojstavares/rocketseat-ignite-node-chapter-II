import express from 'express';
import 'dotenv/config';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const host = process.env.HOST
const port = process.env.PORT

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.use("/specifications", specificationsRoutes);

app.listen(port, () => console.log(`Server is running in ${host}:${port} `));