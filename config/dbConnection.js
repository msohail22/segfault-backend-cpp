"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
var index_js_1 = require("./index.js");
console.log("DB connection file loaded");
var pool = new pg_1.Pool({
    host: index_js_1.postgresCreds.postgresHost,
    port: index_js_1.postgresCreds.postgresPort,
    database: index_js_1.postgresCreds.postgresName,
    user: index_js_1.postgresCreds.postgresUser,
    password: index_js_1.postgresCreds.postgresPassword
});
exports.pool = pool;
console.log();
console.log();
try {
    var result = await pool.query("SELECT 1");
    console.log("Postgres connected successfully");
    console.log("The number of rows fetched is : ", result.rowCount);
}
catch (error) {
    console.log("Unable to connect to DB");
    console.log(error);
}
console.log();
console.log();
