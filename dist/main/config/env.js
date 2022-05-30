"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    dbHost: process.env.DB_HOST || '',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbName: process.env.DB_NAME || ''
};
