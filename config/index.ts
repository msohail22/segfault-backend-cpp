import dotenv from 'dotenv';

dotenv.config();


let postgresHost = process.env.POSTGRES_HOST;
let postgresPort = Number(process.env.POSTGRES_PORT);
let postgresName = process.env.POSTGRES_NAME;
let postgresUser = process.env.POSTGRES_USER;
let postgresPassword = process.env.POSTGRES_PASSWORD;

let serverPort = process.env.SERVER_PORT;

let postgresCreds = {
    postgresHost,
    postgresPort,
    postgresName,
    postgresUser,
    postgresPassword,
};



let serverCreds = {
    port: serverPort
};

if (Number.isNaN(postgresPort)) {
    throw new Error('Postgres port number should be of type number');
}
if (
    !postgresHost ||
    !postgresPort ||
    !postgresName ||
    !postgresUser ||
    !postgresPassword
) {
    throw new Error('Missing one or more required PostgreSQL environment variables.');
}

if (!serverPort) {
    throw new Error('Missing required SERVER_PORT environment variable.');
}

export {
    postgresCreds,
    serverCreds
};