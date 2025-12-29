"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverCreds = exports.postgresCreds = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var postgresHost = process.env.POSTGRES_HOST;
var postgresPort = Number(process.env.POSTGRES_PORT);
var postgresName = process.env.POSTGRES_NAME;
var postgresUser = process.env.POSTGRES_USER;
var postgresPassword = process.env.POSTGRES_PASSWORD;
var serverPort = process.env.SERVER_PORT;
var postgresCreds = {
    postgresHost: postgresHost,
    postgresPort: postgresPort,
    postgresName: postgresName,
    postgresUser: postgresUser,
    postgresPassword: postgresPassword,
};
exports.postgresCreds = postgresCreds;
var serverCreds = {
    port: serverPort
};
exports.serverCreds = serverCreds;
if (Number.isNaN(postgresPort)) {
    throw new Error('Postgres port number should be of type number');
}
if (!postgresHost ||
    !postgresPort ||
    !postgresName ||
    !postgresUser ||
    !postgresPassword) {
    throw new Error('Missing one or more required PostgreSQL environment variables.');
}
if (!serverPort) {
    throw new Error('Missing required SERVER_PORT environment variable.');
}
