import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import { serverCreds } from './config/index.js';
import './config/dbConnection.js';
import { router } from './src/routes/mainRoutes.js';



const app = express();
app.use(express.json());
app.use('/api', router);

const PORT = serverCreds.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})