import { pool } from '../../config/dbConnection.js';

async function runQuery(sql: string, params: any[] = []){
    const result = await pool.query(sql, params);
    return result;
}   

export { runQuery };