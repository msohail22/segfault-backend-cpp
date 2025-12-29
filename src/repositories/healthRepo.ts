import fs from 'fs';
import path from 'path';
import { runQuery } from '../db/index.js';

const healthQuery = fs.readFileSync(
    path.join(process.cwd(), 'src/queries/health.sql'),
    'utf-8'
);

async function checkDBHealth() {
    const result = await runQuery(healthQuery);
    return result;
}

export { checkDBHealth };