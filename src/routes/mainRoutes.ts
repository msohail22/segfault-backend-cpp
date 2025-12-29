import express from 'express';

import { healthController } from '../controllers/healthCheckController.js';

const router = express.Router();

router.get("/health", healthController);


export { router };