import express from 'express';
import 'dotenv/config';

const host = process.env.HOST
const port = process.env.PORT

const app = express();

app.listen(port, () => console.log(`Server is running in host "${host}" port "${port}" `));