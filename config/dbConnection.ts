import { Pool } from 'pg';
import { postgresCreds } from './index.js';

console.log("DB connection file loaded");

const pool = new Pool({
    host: postgresCreds.postgresHost,
    port: postgresCreds.postgresPort,
    database: postgresCreds.postgresName,
    user: postgresCreds.postgresUser,
    password: postgresCreds.postgresPassword
});

console.log();
console.log();

try {
    const result = await pool.query("SELECT 1");
    console.log("Postgres connected successfully");
    console.log("The number of rows fetched is : ", result.rowCount);
} catch(error) {
    console.log("Unable to connect to DB");
    console.log(error);
}

console.log();
console.log();

export { pool };