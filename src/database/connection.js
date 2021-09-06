const mysql = require('mysql');
require('dotenv/config');

const conn = mysql.createConnection(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`);

module.exports = conn;