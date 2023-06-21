//Lireria: https://www.npmjs.com/package/mysql#establishing-connections
var mysql = require("mysql");
// conexion a la base de datos
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'inmobidik'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});

module.exports.conexion = conexion;
