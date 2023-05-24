var mysql = require("mysql");

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'inmobidik'
});

module.exports.conexion = conexion;
