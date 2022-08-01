import express from 'express';
import 'dotenv/config';
import { router } from './routes';

const host = process.env.HOST
const port = process.env.PORT

const app = express();

app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Server is running in ${host}:${port} `));