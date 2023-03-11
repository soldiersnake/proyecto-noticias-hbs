const mysql = require('mysql');
const { pathToFileURL } = require('url');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'noticias'
});

pool.query = util.promisify(pool.query);
console.log("conexcion a la base de datos realizada");

module.exports = pool;