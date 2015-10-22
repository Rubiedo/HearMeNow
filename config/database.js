var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'box1077.bluehost.com',
    user: 'stephgv0_admin',
    password: '123abc',
    db: 'stephgv0_hearmenow'
});

module.exports = connection;