const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'db4free.net',
    port: '3306',
    database:'login_proyect',
    user: 'alperalt',
    password: 'Final1234.'
    
});

module.exports = connection;

