let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'project',
    database : 'node'
});

connection.connect();

module.exports = connection
